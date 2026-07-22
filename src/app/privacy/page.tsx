import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Learn how ${siteConfig.name} handles and protects your data.`,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <LegalPage title="Privacy Policy" updatedAt="July 11, 2026">
          <p>
            This Privacy Policy explains how your personal data is collected, used,
            and protected when you use the Huccet AI mobile application (the
            &ldquo;App&rdquo;, &ldquo;Huccet AI&rdquo;, or &ldquo;we&rdquo;). By using the App, you accept the
            practices described in this policy.
          </p>
          <h2>1. Information We Collect</h2>
          <p>
            Huccet AI does not require you to create a user account. However, the
            following limited data may be collected to operate and improve the App:
          </p>
          <ul>
            <li><strong>Anonymous Visitor ID:</strong> A device-specific, anonymous identifier that does not directly reveal your identity may be created to provide a consistent experience and prevent misuse.</li>
            <li><strong>Usage Data:</strong> Anonymized usage data, such as questions asked, screens viewed, and interaction statistics, may be collected.</li>
            <li><strong>Device and Technical Information:</strong> Technical data such as operating-system version, app version, device model, and crash reports may be collected to improve service quality.</li>
            <li><strong>Analytics Data:</strong> Aggregated and anonymous analytics may be processed to understand how the App is used.</li>
          </ul>
          <h2>2. Firebase and Third-Party Services</h2>
          <p>
            Our App may use Firebase infrastructure provided by Google, such as
            Firebase Analytics, Firebase Crashlytics, and Firebase Authentication.
            Firebase may help collect and process the anonymous usage and technical
            data described above. Please review Google&apos;s privacy policy for more
            information about Firebase&apos;s data practices.
          </p>
          <h2>3. Cookies and Similar Technologies</h2>
          <p>
            Our website may use a limited number of cookies or similar local-storage
            technologies for essential functionality and anonymous visitor analytics.
            These technologies are not used to identify you personally. You can
            manage or disable cookies through your browser settings.
          </p>
          <h2>4. How We Use Data</h2>
          <p>We use collected data only to:</p>
          <ul>
            <li>Provide and maintain the App&apos;s functionality</li>
            <li>Analyze and improve service quality</li>
            <li>Detect and resolve technical issues</li>
            <li>Prevent misuse and security violations</li>
          </ul>
          <p>Your data is never sold or rented to third parties for marketing purposes.</p>
          <h2>5. Data Retention and Security</h2>
          <p>
            Your data is protected with reasonable technical and administrative
            measures against unauthorized access, loss, or misuse. It is retained
            only as long as necessary for its functional purpose, unless a longer
            retention period is required by law.
          </p>
          <h2>6. A Note About Religious Content and Questions</h2>
          <p>
            Questions you enter in the App may be processed to provide better,
            evidence-based answers. They are evaluated through an anonymous visitor
            ID and are not linked to your identity.
          </p>
          <h2>7. Children&apos;s Privacy</h2>
          <p>
            Our App does not knowingly collect personal data from children under
            13. If we become aware of such a situation, we will promptly delete the
            relevant data.
          </p>
          <h2>8. Your Rights</h2>
          <p>
            Subject to applicable data-protection laws, you may have the right to
            request access to, correction of, or deletion of your data. You may
            contact us through the communication channels in the App for such requests.
          </p>
          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes take effect
            when published on this page. We may notify you of significant changes
            through an in-app notification.
          </p>
          <h2>10. Contact</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us through
            the communication channels in the App.
          </p>
        </LegalPage>
      </main>
      <SiteFooter />
    </>
  );
}
