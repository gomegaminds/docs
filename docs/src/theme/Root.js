import React from "react";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

// Default implementation, that you can customize
export default function Root({ children }) {
    return (
        <>
            <TawkMessengerReact
                propertyId="62d08e1d7b967b1179999751"
                widgetId="1g7vam9d1"
            />
            {children}
        </>
    );
}
