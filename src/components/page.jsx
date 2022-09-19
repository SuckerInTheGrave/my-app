import React, { useState } from "react";
import Navbar from "./navbar";
import CountersList from "./countersList";
import Breadcrumbs from "./breadcrumb";

const Page = () => {

    const logoUrl = "https://picsum.photos/100";
    const siteName = "example.com";

    const [ menuItems, setMenuItems ] = useState([
        { id: 'main', text: 'Главная', active: true, link: '#main' },
        { id: 'blog', text: 'Блог', active: false, link: '#blog' },
        { id: 'contacts', text: 'Контакты', active: false, link: '#contacts' } 
    ]);

    const handleItemClick = id => {
        setMenuItems(prevState => prevState.map(item => {
            if (item.id !== id) {
                return { ...item, active: false };
            }
            return { ...item, active: true };
        }));
    };

    const handleMainActive = () => {
        setMenuItems(prevState => prevState.map(item => {
            return { ...item, active: item.id === "main" };
        }));
    }

    const currentActivePage = () => menuItems.find(item => item.active);

    return (
        <>
            <main
                className="d-flex flex-nowrap"
                style={{ height: "100vh" }}
            >
                <div
                    className="d-flex flex-column flex-shrink-0 p-3 bg-light"
                    style={{ width: "280px" }}
                >
                    <div
                        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
                    >
                        <img className="bi pe-none me-2" src={ logoUrl } alt="logo" />
                        <span className="fs-4">{ siteName }</span>
                    </div>
                    <hr />
                    <Navbar
                        menuItems={ menuItems }
                        onItemClick={ handleItemClick }
                    />
                </div>
                <div className="p-4">
                    <div>
                        <Breadcrumbs
                            page={ currentActivePage }
                            onGoMain={ handleMainActive }
                        />
                    </div>
                    <CountersList />
                </div>
            </main>
            <footer>Footer</footer>
        </>
    )
};

export default Page;