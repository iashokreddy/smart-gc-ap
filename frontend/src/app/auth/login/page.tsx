import { PortalPageTemplate } from '@/components/common/PortalPageTemplate';

export default function LoginPage() {
  return (
    <PortalPageTemplate
      title="Sign In"
      titleTe="లాగిన్"
      description="Sign in to access personalized services, grievance tracking, and volunteer features."
      highlights={[
        'Secure login flow integration point',
        'Role-based access compatibility',
        'Ready for Auth0 / Azure AD B2C wiring',
      ]}
      ctaLabel="Go to Home"
      ctaHref="/"
    />
  );
}
