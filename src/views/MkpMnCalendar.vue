<template>
  <div id="calendarView">
    <TopBar/>
    <calendar :first-day="1" :all-events="events"></calendar>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar"
import GoogleCalendarApi from "@/js/GoogleCalendarApi"
import {Calendar} from 'vue-bootstrap-calendar'
import {handlePromise} from "@/js/common"

export default {
  name: "mkpmnCalendar",
  components: {TopBar, Calendar},
  data: () => ({
    googleCalendarApi: null,
    calendarId: localStorage.getItem("calendarId"),
    selectedCalendarId: null,
    calendars: [],
    events: []
  }),
  methods: {
    async initGoogleCalendarApi() {
      let response = await handlePromise(this.$gapi.getGapiClient());
      if (response.success) {
        const client = response.data.client;
        this.googleCalendarApi = new GoogleCalendarApi(client);
      } else {
        // eslint-disable-next-line no-console
        console.error("Failed to get gapi client", response.err);
      }
    },
    calendarChanged(calendarId) {
      localStorage.setItem("calendarId", calendarId);
      this.calendarId = calendarId;
      this.populateEvents();
    },

    async getCalendars() {
      const page = this;
      const calendar = this.googleCalendarApi;
      if (calendar) {
        try {
          const items = await calendar.retrieveCalendars();
          let calendars = [];
          let primaryId = null;
          items.forEach(item => {
            let name = item.summary + (item.primary ? " (primary)" : "");
            calendars.push({
              id: item.id,
              name,
              primary: item.primary
            });
            if (item.primary) primaryId = item.id;
          });
          page.selectedCalendarId = page.calendarId || primaryId;
          page.calendars = calendars;
          // If we do not have a calendarId we need to emit an event to retrieve the calendar events
          if (!page.calendarId) {
            console.log("true");
            this.calendarChanged(page.selectedCalendarId);
          } else {
            console.log("false")
          }
        } catch (err) {
          // eslint-disable-next-line no-console
          console.error("Failed to retrieve calendars", err);
        }
      } else {
        console.error("no calendar api loaded.");
      }
    },
    async populateEvents() {
      let thisPage = this
      try {
        const today = new Date();
        let googleEvents = await thisPage.googleCalendarApi.retrieveEvents(thisPage.calendarId, today)
        googleEvents.forEach(event => {
          this.events.push({
            id: event.id,
            title: event.summary,
            color: 'panel-danger',
            date: event.start.dateTime
          })
        })
        alert("got events!!" + thisPage.events.length);
      } catch (err) {
        console.error("failed to retrieve calendar info", err);
      }
    }

  },//methods
  async created() {
    //no idea why the noninitialized localstorage property is returning the string "undefined", but handling it
    if (this.calendarId === "undefined") {
      this.calendarId = null;
    }
    let thisPage = this;
    if (!this.$gapi.isAuthenticated()) {
      const response = await handlePromise(this.$gapi.login());
      if (response.success) {
        await thisPage.initGoogleCalendarApi().then(
            async () => {
              if (thisPage.calendarId) {
                await thisPage.populateEvents();
              } else {
                await thisPage.getCalendars()
              }
            }
        );
      } else {
        // eslint-disable-next-line no-console
        console.error("Failed to login", response.err);
      }
    } else {
      await thisPage.initGoogleCalendarApi().then(
          async () => {
            if (thisPage.calendarId) {
              await thisPage.populateEvents();
            } else {
              await thisPage.getCalendars()
            }
          }
      );
    }
  } //created
}

</script>

<style scoped>

</style>
