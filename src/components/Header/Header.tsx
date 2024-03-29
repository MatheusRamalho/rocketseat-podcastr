import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

import { HeaderWrapper } from './Header.styles';

export const Header = () => {
    const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
        locale: ptBR,
    });

    return (
        <HeaderWrapper>
            <img
                src="/logo.svg"
                alt="Podcastr"
            />

            <p> O melhor para você ouvir, sempre </p>
            <span> {currentDate} </span>
        </HeaderWrapper>
    );
}
