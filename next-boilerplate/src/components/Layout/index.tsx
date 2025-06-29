import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

import clsx from 'clsx';

type Props = {
    children: ReactNode;
    className?: string;
};

const ScrollContext = createContext<{ isScrolling: boolean }>({ isScrolling: false });

const Header = ({ children, className }: Props) => {
    const { isScrolling } = useContext(ScrollContext);

    return (
        <header
            className={clsx(
                'sticky left-0 top-0 z-50 w-full',
                isScrolling ? '-translate-y-full' : 'translate-y-0',
                'col-span-2 transition-all duration-300',
                className
            )}
        >
            {children}
        </header>
    );
};

const Main = ({ children, className }: Props) => <main className={clsx(className)}>{children}</main>;

const Sidebar = ({ children, className }: Props) => <aside className={clsx(className)}>{children}</aside>;

const Footer = ({ children, className }: Props) => {
    const { isScrolling } = useContext(ScrollContext);

    return (
        <footer
            className={clsx(
                'sticky bottom-0 left-0 z-50 w-full',
                isScrolling ? 'translate-y-full' : 'translate-y-0',
                'col-span-2 transition-all duration-300',
                className
            )}
        >
            {children}
        </footer>
    );
};

interface LayoutComponent extends React.FC<Props> {
    Header: typeof Header;
    Main: typeof Main;
    Sidebar: typeof Sidebar;
    Footer: typeof Footer;
}

const Layout: LayoutComponent = ({ children, className }: Props) => {
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 64) {
                setIsScrolling(true);
            } else {
                setIsScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const hasVisibleSidebar = React.Children.toArray(children).some(
        (child) =>
            React.isValidElement<Props>(child) &&
            child.type === Layout.Sidebar &&
            !child.props.className?.includes('hidden')
    );

    return (
        <ScrollContext.Provider value={{ isScrolling }}>
            <div
                className={clsx(
                    'grid h-dvh grid-rows-[auto_1fr_auto]',
                    hasVisibleSidebar ? 'grid-cols-[250px_1fr]' : 'grid-cols-[1fr]',
                    className
                )}
            >
                {children}
            </div>
        </ScrollContext.Provider>
    );
};

Layout.Header = Header;
Layout.Main = Main;
Layout.Sidebar = Sidebar;
Layout.Footer = Footer;

export default Layout;
