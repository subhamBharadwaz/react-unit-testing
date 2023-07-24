import UserProfile from "@/components/UserProfile";
import { render, screen } from "@testing-library/react";

describe("User Profile - Rendering", () => {
  it("should have text Email Verified when isEmailsVerified is true", () => {
    render(
      <UserProfile
        displayName="Subham The Developer"
        userName="subham"
        email="subham@gmail.com"
        isEmailVerified={true}
      />
    );
    expect(screen.getByText("Email Verified")).toBeInTheDocument();
  });

  it("should have text Email Not Verified when isEmailsVerified is false", () => {
    render(
      <UserProfile
        displayName="Subham The Developer"
        userName="subham"
        email="subham@gmail.com"
        isEmailVerified={false}
      />
    );
    expect(screen.queryByText("Email Verified")).not.toBeInTheDocument();
    expect(screen.getByText("Email Not Verified")).toBeInTheDocument();
  });

  it("should have display name end with three dots when length is greater than 30 characters", () => {
    render(
      <UserProfile
        displayName="Subham The Developer Subham The Developer Subham The Developer Subham The Developer Subham The Developer Subham The Developer"
        userName="subham"
        email="subham@gmail.com"
        isEmailVerified={false}
      />
    );

    const displayNameSpanElement = screen.getByText(/Display Name: /);
    expect(displayNameSpanElement).toHaveTextContent(/.*\.\.\./);
  });

  it("should not have three dots at end of the display name when less than 30 characters", () => {
    render(
      <UserProfile
        displayName="Subham"
        userName="subham"
        email="subham@gmail.com"
        isEmailVerified={false}
      />
    );

    const displayNameSpanElement = screen.getByText(/Display Name: /);
    expect(displayNameSpanElement).not.toHaveTextContent(/.*\.\.\./);
  });
});
