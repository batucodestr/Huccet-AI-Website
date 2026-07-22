import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `${siteConfig.name} terms of service and conditions for using the App.`,
};

export default function TermsOfServicePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <LegalPage title="Terms of Service" updatedAt="July 11, 2026">
          <p>
            These Terms of Service (the &ldquo;Terms&rdquo;) govern your use of the Huccet AI
            mobile application (the &ldquo;App&rdquo;). By downloading or using the App,
            you agree to these Terms. If you do not agree, please do not use the App.
          </p>
          <h2>1. Description of the Service</h2>
          <p>
            Huccet AI is an AI-powered research assistant that explores trusted
            Islamic sources and provides information with supporting evidence. The
            App aims to help users learn about Islamic topics transparently and with
            reference to sources.
          </p>
          <h2>2. Important Notice: Not a Fatwa Authority</h2>
          <p>
            <strong>Huccet AI is not an official religious authority, a fatwa authority, or a religious scholar, and it must not be treated as one.</strong>{" "}
            The content provided by the App is information compiled by an AI-powered
            research tool from publicly available, generally trusted sources. This content:
          </p>
          <ul>
            <li>Does not constitute a binding religious ruling (fatwa),</li>
            <li>Does not replace the views of qualified religious scholars or official religious institutions, and</li>
            <li>Must not be used as the sole basis for personal, legal, or religious decisions.</li>
          </ul>
          <p>
            For binding, personal, or sensitive religious matters, we strongly
            recommend consulting a qualified and trusted scholar.
          </p>
          <h2>3. Acceptable Use</h2>
          <p>When using the App, you agree to:</p>
          <ul>
            <li>Not use the App for unlawful or unauthorized purposes;</li>
            <li>Not engage in activities that disrupt the App or place an excessive load on it;</li>
            <li>Not present content obtained through the App as an official fatwa or religious-authority decision; and</li>
            <li>Not use the App in a way that infringes the rights of others.</li>
          </ul>
          <h2>4. Intellectual Property</h2>
          <p>
            All intellectual-property rights in the App&apos;s design, logo, brand, and
            software belong to Huccet AI or its licensors. These elements may not be
            reproduced or distributed without prior written permission.
          </p>
          <h2>5. Service Limitations and Changes</h2>
          <p>
            We do not guarantee that the service will be uninterrupted, error-free,
            or always available. We reserve the right to change, suspend, or
            discontinue features, content, or availability without prior notice.
          </p>
          <h2>6. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Huccet AI is not liable for
            direct or indirect damages arising from the use of content made available
            through the App. App content is provided &ldquo;as is&rdquo; without a guarantee of
            absolute accuracy or completeness.
          </p>
          <h2>7. Third-Party Links and Sources</h2>
          <p>
            The App may refer to third-party sources. Huccet AI is not responsible
            for their content, and each source should be evaluated in its original context.
          </p>
          <h2>8. Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. Updated Terms apply when
            published on this page. Your continued use of the App means that you
            accept the updated Terms.
          </p>
          <h2>9. Governing Law</h2>
          <p>
            These Terms are subject to applicable local law and interpreted
            accordingly. Competent courts and authorities will govern disputes that
            may arise from these Terms.
          </p>
          <h2>10. Contact</h2>
          <p>
            If you have questions about these Terms of Service, please contact us
            through the communication channels in the App.
          </p>
        </LegalPage>
      </main>
      <SiteFooter />
    </>
  );
}
