import React, { useState } from "react";
import Navbar from "./navbar";
import CountersList from "./countersList";
import Breadcrumbs from "./breadcrumb";
import EpisodesList from "./episodesList";

const Page = () => {
    const logoUrl = "https://picsum.photos/100";
    const siteName = "example.com";

    const [menuItems, setMenuItems] = useState([
        { id: "counters", text: "Счётчики", active: true, link: "#counters" },
        { id: "episodes", text: "Эпизоды", active: false, link: "#episodes" }
    ]);

    const handleItemClick = (id) => {
        setMenuItems((prevState) =>
            prevState.map((item) => {
                if (item.id !== id) {
                    return { ...item, active: false };
                }
                return { ...item, active: true };
            })
        );
    };

    const handleMainActive = () => {
        setMenuItems((prevState) =>
            prevState.map((item) => {
                return { ...item, active: item.id === "counters" };
            })
        );
    };

    const currentActivePage = () => menuItems.find((item) => item.active);

    return (
        <>
            <main className="d-flex flex-nowrap" style={{ height: "100vh" }}>
                <div
                    className="d-flex flex-column flex-shrink-0 p-3 bg-light"
                    style={{ width: "280px" }}
                >
                    <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                        <img
                            className="bi pe-none me-2"
                            src={logoUrl}
                            alt="logo"
                        />
                        <span className="fs-4">{siteName}</span>
                    </div>
                    <hr />
                    <Navbar
                        menuItems={menuItems}
                        onItemClick={handleItemClick}
                    />
                </div>
                <div className="p-4">
                    <div>
                        <Breadcrumbs
                            page={currentActivePage}
                            onGoMain={handleMainActive}
                        />
                    </div>
                    <div>
                        {currentActivePage().id === "counters" && (
                            <CountersList />
                        )}
                        {currentActivePage().id === "episodes" && (
                            <EpisodesList />
                        )}
                    </div>
                </div>
            </main>
        </>
    );
};

export default Page;
