import { Link, NavLink } from 'react-router';
import { cn } from '../../utils/cn';
import ThemeToggle from './ThemeToggle';

type Props = {
  linkTexts: string[];
  linksPaths: string[];
};

const Navbbar = (props: Props) => {
  return (
    <nav className="flex flex-wrap justify-between items-center py-4 px-6">
      <h1 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-300">
        <Link to="/">NovaLux</Link>
      </h1>
      <ul className="flex gap-2">
        {props.linkTexts.map((linkText, index) => (
          <li key={index}>
            <NavLink
              to={props.linksPaths[index]}
              className={({ isActive }) =>
                cn(
                  isActive ? 'bg-zinc-200 text-zinc-600 dark:bg-zinc-600 dark:text-zinc-300 font-semibold' : '',
                  'px-3 py-2 rounded-2xl text-zinc-500'
                )
              }
            >
              {linkText}
            </NavLink>
          </li>
        ))}
      </ul>
      <ThemeToggle />
    </nav>
  );
};

export default Navbbar;
