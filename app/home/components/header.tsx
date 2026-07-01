import Logo from "./logo";

export default function Header() {
    return (
        <header className="flex justify-evenly items-center p-4">
            <Logo />
            <nav>
                <ul className="flex gap-4">
                    <li><a href="#" className="text-gray-700 hover:text-gray-900">Inicio</a></li>
                    <li><a href="#" className="text-gray-700 hover:text-gray-900">Explorar</a></li>
                    <li><a href="#" className="text-gray-700 hover:text-gray-900">Acerca de</a></li>
                </ul>
            </nav>
        </header>
    );
}