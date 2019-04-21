import React, { Component } from "react";
import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";
import "./PrivacyPage.css";


export default class PrivacyPage extends Component {
  render() {
    return (
      <div>
        <Navbar isLoggedIn={this.props.isLoggedIn} resetAllState={this.props.resetAllState} />
        <div className="container pageBody">
          <h1 className="privacyPolicyHeader">Privacy Policy – www.ndnu.edu</h1>
          <div>
            <p>Revised April 25, 2014</p>
            <p>Notre Dame de Namur University is committed to protecting your privacy while providing you with a useful and enjoyable experience on our website. This privacy policy is intended to inform you of how we collect information on our website, how that information is used and how your privacy is protected. By accessing www.ndnu.edu, you acknowledge and fully understand Notre Dame de Namur University’s Privacy Statement and freely consent to the information collection and use practices described therein.</p>
            <h2>Information We Collect</h2>
            <p>When you visit <a href="www.ndnu.edu">www.ndnu.edu</a> and its subdomains, the following information may be collected:</p>
            <ul>
              <li>Internet Protocol (IP) address of the computer being used</li>
              <li>Web pages requested</li>
              <li>Referring web page</li>
              <li>Browser used (Internet Explorer, Firefox, Safari, Chrome, etc.)</li>
              <li>Type of computer used</li>
              <li>State or country from which you accessed the site</li>
              <li>Date and time of your visit</li>
            </ul>
            <p>Most web servers collect the above information. The university tracks this information to administer the website and analyze its usage. The information gathered is not linked to your personal information, unless you have voluntarily provided your personal information (i.e. by filling out and submitting a form on the website).

In addition, we have enabled Google Analytics Demographics and Interest Reporting. Data collected, such as age, gender and interests, are used internally to help us better provide information to those who might be interested in our programs. Using the Ads Settings, users can opt-out of Google Analytics for Display Advertising and customize Google Display Network ads. You may also be interested in Google Analytics’ currently available opt-outs for the web.</p>
            <h2>Personal Information Offered Voluntarily</h2>
            <p>While using our website, you may choose to provide your personal information (such as your name, address, email or phone number) voluntarily on a form, in order to receive some benefit (i.e. more information about an academic program, registration for an event, subscription to a mailing list, etc.). If you do not want the university to collect this information, please do not submit it. Any personal information collected will only be used for the purpose indicated.</p>
            <h2>Use of Information Collected</h2>
            <p>Notre Dame de Namur University will not share your personal information with any entity outside of the university. This means that the university will never, without your consent, distribute or sell your personal information that has been collected through the website to any entity outside of the university, except for certain explicit circumstances in which disclosure is required by law.

Notre Dame de Namur University may use personal information collected through the website to contact you about special programs and events, but only if you are given the opportunity to opt-out of such communications. Your browser and IP address information may be used to report information about site access in order to improve user experience and for troubleshooting purposes.</p>
            <h2>cookies</h2>
            <p>Notre Dame de Namur University may use cookies to personalize or enhance your user experience. These small text files are stored by your web browser on behalf of a website to personalize your web experience, and to track visitor behavior. The cookie helps recall your specific information on subsequent visits, simplifying the process of delivering relevant content and easing site navigation by saving your preferences and login information. Cookies are uniquely assigned to you and can only be read by a web server in the domain that issued the cookie to you. Personally identifying information is not stored within cookies,

You can accept or decline cookies by modifying your browser settings. Some website features may not function properly with cookies turned off.</p>
            <h2>External Sites</h2>
            <p>Portions of Notre Dame de Namur University’s web presence are maintained by third-party vendors (i.e. the NDNU Athletics website, <a href="www.ndnuargos.edu">www.ndnuargos.edu</a>) who have their own privacy policies. You should review the privacy policies of these third-parties by following the appropriate links on these websites, as their policies may different from this policy. These vendors are encouraged to practice responsible behavior toward consumer privacy, however, Notre Dame de Namur University does not have control over the practices of these vendors and as such, the university is not responsible for the privacy practices of those websites.

In an effort to supply useful information, the university website will sometimes link to other websites and resources. Notre Dame de Namur University does not control or endorse these sites and is not responsible for their content or availability. These sites are not bound by this privacy policy.</p>
            <h2>Updates to This Policy</h2>
            <p>Notre Dame de Namur University reserves the right to update this policy policy at any time. When changes are made to the policy, the date of revision will be posted at the top of the policy. We encourage you to periodically review this privacy policy.</p>

            <h2>Contact</h2>
            <p>If you have any questions or concerns regarding this privacy policy, please contact the Marketing and Communications Department at <a href="mailto:marketing@ndnu.edu.">marketing@ndnu.edu</a></p>
          
          </div>
          <Footer isLoggedIn={this.props.isLoggedIn} />
        </div>
      </div>
    );
  }
}