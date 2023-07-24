import UserList from "@/components/UserList";
import { render, screen } from "@testing-library/react";
import { server } from "../mocks/server";
import { rest } from "msw";

describe("UserLIst - Rendering", () => {
  it("should have text subham", async () => {
    render(<UserList />);
    expect(await screen.findByText("subham")).toBeInTheDocument();
    expect(screen.queryByText("No Users")).not.toBeInTheDocument();
  });

  it("should have text mike rendered", async () => {
    server.use(
      rest.get("/api/users", (req, res, ctx) => {
        return res(ctx.json([{ id: 2, username: "mike" }]));
      })
    );
    render(<UserList />);
    expect(await screen.findByText("mike")).toBeInTheDocument();
  });
});
