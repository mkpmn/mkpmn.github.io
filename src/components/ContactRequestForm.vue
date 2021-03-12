<template>
  <b-container class="form-container-inset" fluid="xs">
    <b-row>
      <b-col>
        <b-form accept-charset="UTF-8"
                action="https://bk271.infusionsoft.com/app/form/process/7278775cce958ae4e2dbb097c54a074b"
                id="inf_form_7278775cce958ae4e2dbb097c54a074b" method="POST">
          <input name="inf_form_xid" type="hidden" value="7278775cce958ae4e2dbb097c54a074b">
          <input name="inf_form_name" type="hidden" value="Public Outreach Form">
          <input name="infusionsoft_version" type="hidden" value="1.70.0.304639">
          <div>Contact. Connect. Community.</div>
          <div class="form-container">
            <b-form-row class="infusion-field">
              <b-col>
                <label for="inf_field_Email">Email <span class="required">*</span></label>
              </b-col>
              <b-col>
                <input class="infusion-field-input" id="inf_field_Email" name="inf_field_Email" placeholder="Email *"
                       type="text">
              </b-col>
              <b-col>&nbsp;</b-col>
            </b-form-row>

            <b-form-row>
              <b-col>
                <label for="inf_field_FirstName">First Name <span class="required">*</span></label>
              </b-col>
              <b-col>
                <input class="infusion-field-input" id="inf_field_FirstName" name="inf_field_FirstName"
                       placeholder="First Name *" type="text">
              </b-col>
              <b-col>&nbsp;</b-col>
            </b-form-row>

            <b-form-row>
              <b-col>
                <label for="inf_field_LastName">Last Name</label>
              </b-col>
              <b-col>
                <input class="infusion-field-input" id="inf_field_LastName" name="inf_field_LastName"
                       placeholder="Last Name *" type="text">
              </b-col>
              <b-col>&nbsp;</b-col>
            </b-form-row>
            <b-form-row>
              <b-col>&nbsp;</b-col>
              <b-col class="infusion-field">
              <textarea cols="24" id="inf_custom_Message" name="inf_custom_Message" placeholder="How can we help? *"
                        rows="5"></textarea>
              </b-col>
              <b-col>&nbsp;</b-col>
            </b-form-row>

            <b-form-row class="infusion-field">
              <b-col>
                <label for="inf_custom_NearestArea">Nearest Area</label>
              </b-col>

              <b-col class="infusion-field-input-container">
                <select id="inf_custom_NearestArea" name="inf_custom_NearestArea">
                  <option value="">Please select one</option>
                  <option value="Australia: ACT">Australia: ACT</option>
                  <option value="Australia: NSW">Australia: NSW</option>
                  <option value="Australia: QLD">Australia: QLD</option>
                  <option value="Australia: Southern">Australia: Southern</option>
                  <option value="Australia: Victoria">Australia: Victoria</option>
                  <option value="Australia: Western">Australia: Western</option>
                  <option value="Australia: Other">Australia: Other</option>
                  <option value="Belgium">Belgium</option>
                  <option value="Canada: Alberta">Canada: Alberta</option>
                  <option value="Canada: British Columbia">Canada: British Columbia</option>
                  <option value="Canada: Canada West">Canada: Canada West</option>
                  <option value="Canada: Ontario">Canada: Ontario</option>
                  <option value="Canada: Québec">Canada: Québec</option>
                  <option value="Canada: Other">Canada: Other</option>
                  <option value="France">France</option>
                  <option value="Germany">Germany</option>
                  <option value="Israel">Israel</option>
                  <option value="Mexico">Mexico</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="Nordic (FI; DA; NO; SE)">Nordic (FI; DA; NO; SE)</option>
                  <option value="Southeast Asia (SGP">Southeast Asia (SGP</option>
                  <option value="THA">THA</option>
                  <option value="MYS)">MYS)</option>
                  <option value="South Africa: Cape Town">South Africa: Cape Town</option>
                  <option value="South Africa: Johannesburg">South Africa: Johannesburg</option>
                  <option value="South Africa: Other">South Africa: Other</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="United Kingdom &amp; Ireland">United Kingdom &amp; Ireland</option>
                  <option value="USA: Central Plains (MN; IA; NE; SD)" selected>USA: Central Plains (MN; IA; NE; SD)
                  </option>
                  <option value="USA: Chicago IL">USA: Chicago IL</option>
                  <option value="USA: Colorado">USA: Colorado</option>
                  <option value="USA: Florida">USA: Florida</option>
                  <option value="USA: Greater Carolinas (SC; NC; WV)">USA: Greater Carolinas (SC; NC; WV)</option>
                  <option value="USA: Hawaii">USA: Hawaii</option>
                  <option value="USA: Heartland (KS; MO)">USA: Heartland (KS; MO)</option>
                  <option value="USA: Intermountain (UT; MT; ID; WY)">USA: Intermountain (UT; MT; ID; WY)</option>
                  <option value="USA: Los Angeles CA">USA: Los Angeles CA</option>
                  <option value="USA: Metro NY Tri State (NY; NJ; CT)">USA: Metro NY Tri State (NY; NJ; CT)</option>
                  <option value="USA: Mid America (MI; Windsor ON; OH; IN; KY; TN)">USA: Mid America (MI; Windsor ON;
                    OH; IN; KY; TN)
                  </option>
                  <option value="USA: Mid Atlantic (DC; MD; DE)">USA: Mid Atlantic (DC; MD; DE)</option>
                  <option value="USA: New England (MA; ME; NH; VT; CT)">USA: New England (MA; ME; NH; VT; CT)</option>
                  <option value="USA: Northern California">USA: Northern California</option>
                  <option value="USA: Northwest (OR; WA)">USA: Northwest (OR; WA)</option>
                  <option value="USA: Philadelphia">USA: Philadelphia</option>
                  <option value="USA: San Diego CA">USA: San Diego CA</option>
                  <option value="USA: South Central (TX; MS; LA; OK; AR)">USA: South Central (TX; MS; LA; OK; AR)
                  </option>
                  <option value="USA: South East (GA; E. TN)">USA: South East (GA; E. TN)</option>
                  <option value="USA: Southwest (AZ; NM)">USA: Southwest (AZ; NM)</option>
                  <option value="USA: St Louis">USA: St Louis</option>
                  <option value="USA: Upstate New York">USA: Upstate New York</option>
                  <option value="USA: Wisconsin">USA: Wisconsin</option>
                  <option value="Other">Other</option>
                </select>
              </b-col>
              <b-col/>
            </b-form-row>

            <div class="text" contentid="paragraph">
              <span>Please select the closest area to you from the dropdown menu so we can direct your request to the nearest contact person.</span>
            </div>

            <div class="infusion-field">
  <span class="infusion-option">
    <input
        id="inf_option_IgiveconsenttousethisinformationtosendadditionalemailsandcommunicationasdescribedinyourPrivacyPolicy"
        name="inf_option_IgiveconsenttousethisinformationtosendadditionalemailsandcommunicationasdescribedinyourPrivacyPolicy"
        type="checkbox" value="973">
    <label
        for="inf_option_IgiveconsenttousethisinformationtosendadditionalemailsandcommunicationasdescribedinyourPrivacyPolicy">I give consent to use this information to send additional emails and communication as described in your Privacy Policy *</label>
  </span>
            </div>

            <button class="infusion-submit" id="recaptcha_7278775cce958ae4e2dbb097c54a074b" type="submit" disabled>
              Connect
            </button>

            <div class="text" contentid="paragraph">
              <div>Read our <a href="https://mankindproject.org/privacy_policy/" nottracked="true" shape="rect"
                               target="_blank">Privacy Policy</a></div>
            </div>
          </div>
          <input type="hidden" id="timeZone" name="timeZone" value="America/Chicago">
        </b-form>
      </b-col>
      <b-col>
        <b-row>
          <div>Our Commitment when reaching out</div>
        </b-row>
        <b-row>
          <div>more moving words</div>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "ContactRequestForm"
}
</script>

<style scoped>

.form-container {

}

@media (min-width: 981px) {
  .form-container-pos {
    margin-left: 0 !important;
  }
}

.form-container-inset {
  font-size: 13px;
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  color: #333333;
  margin: 0px 0px 0px 0px;
  padding: 3px 12px 6px;
  background: #ffffff;
  border-radius: 6px;
}

</style>
