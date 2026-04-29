import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { Home } from "./pages/Home";
import { TourAreas } from "./pages/TourAreas";
import { BookReservation } from "./pages/BookReservation";
import { Payment } from "./pages/Payment";
import { Contact } from "./pages/Contact";
import { Notes } from "./pages/Notes";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "tour-areas", Component: TourAreas },
      { path: "book-reservation", Component: BookReservation },
      { path: "payment", Component: Payment },
      { path: "contact", Component: Contact },
      { path: "notes", Component: Notes },
      { path: "*", Component: NotFound },
    ],
  },
]);
