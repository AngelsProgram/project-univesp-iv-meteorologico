import '#/styles/header.css';
import NextLink from 'next/link';

export function Header(){
    return(
        <header>
            <nav>
                <ul>
                    <li><NextLink href='/'>Home</NextLink></li>
                    <li><NextLink href='/precipitacao'>Precipitação</NextLink></li>
                </ul>
            </nav>
        </header>
    )
}