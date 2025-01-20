import Link from "next/link";
import { getMenus } from "./getMenus";


async function Footer() {
  const menuInstitucional = await getMenus('Institucional');
  return (
    console.log(menuInstitucional.props.menuItems.edges.map((item: []) => item.node)),
    <footer className="w-100 rounded-md">
      <ul>
        {menuInstitucional.props.menuItems.edges.map((item: []) => (
          <li key={item.node.id}>
            <Link href={item.node.url}>{item.node.label}</Link>
          </li>
        ))}
      </ul>

    </footer>
  );
};

export default Footer;
