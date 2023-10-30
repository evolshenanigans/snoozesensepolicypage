import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <header className="w-full text-center mb-8">
          <h1>Privacy Policy and How to Delete Info</h1>
        </header>
        <section className="mb-8">
          <h2>How to Delete Info</h2>
          <p>
            If you wish to delete your account and discontinue using
            SnoozeSense, please send an email to
            <a
              href="mailto:dreamteamcolab2@gmail.com"
              className="text-blue-500 underline"
            >
              dreamteamcolab2@gmail.com
            </a>{" "}
            from the email address associated with your SnoozeSense account,
            requesting account deletion. Upon receipt of your request, we will
            process your account deletion promptly. Please be aware that once
            your account is deleted, all associated data will be permanently
            removed from our servers, and this action cannot be reversed. It's
            important to ensure that you are ready to lose access to your
            account and all associated data before sending a deletion request.
            Your privacy and satisfaction are our priority, and our team is here
            to assist with the process to ensure a smooth experience.
          </p>
        </section>
        <section>
          <h2>Privacy Policy for SnoozeSense</h2>
          <article>
            <p>
              <strong>Privacy Policy for SnoozeSense</strong>
              <br />
              Last updated: (insert date)
              <br />
              <br />
              SnoozeSense (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;)
              operates the SnoozeSense application (the &quot;Service&quot;).
              This page informs you of our policies regarding the collection,
              use, and disclosure of personal information when you use our
              Service.
              <br />
              <br />
              We will not use or share your information with anyone except as
              described in this Privacy Policy. By using the Service, you agree
              to the collection and use of information in accordance with this
              policy.
              <br />
              <br />
              <strong>Information Collection And Use</strong>
              <br />
              We collect your email address to help determine your sleep time
              and to provide and improve our Service to you.
              <br />
              <br />
              <strong>Log Data</strong>
              <br />
              We value your trust in providing us your Personal Information,
              thus we are striving to use commercially acceptable means of
              protecting it. But remember that no method of transmission over
              the internet, or method of electronic storage is 100% secure and
              reliable, and we cannot guarantee its absolute security.
              <br />
              <br />
              <strong>Service Providers</strong>
              <br />
              We do not share your data with third-party companies or
              individuals. Your data is stored securely in Firebase.
              <br />
              <br />
              <strong>Security</strong>
              <br />
              The security of your Personal Information is important to us, and
              your data is securely stored in Firebase. However, remember that
              no method of transmission over the internet, or method of
              electronic storage is 100% secure. While we strive to use
              commercially acceptable means to protect your Personal
              Information, we cannot guarantee its absolute security.
              <br />
              <br />
              <strong>User Rights</strong>
              <br />
              You have the right to access, correct, or delete your personal
              information at any time. Please contact us at{" "}
              <a
                href="mailto:dreamteamcolab2@gmail.com"
                className="text-blue-500 underline"
              >
                dreamteamcolab2@gmail.com
              </a>{" "}
              for any inquiries or requests regarding your data.
              <br />
              <br />
              <strong>Changes To This Privacy Policy</strong>
              <br />
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by sending you an email.
              <br />
              <br />
              <strong>Contact Us</strong>
              <br />
              If you have any questions or suggestions about our Privacy Policy,
              do not hesitate to contact us at{" "}
              <a
                href="mailto:dreamteamcolab2@gmail.com"
                className="text-blue-500 underline"
              >
                dreamteamcolab2@gmail.com
              </a>
              .
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}
