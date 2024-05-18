import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
// import Navbar from "@/components/navbar";
import BudgetPlanner from "@/components/BudgetPlanner";
import LandingPage from "@/components/homelandingpage";
import Cards from "@/components/cards";
import ExpenseTable from "@/components/expenseTable";
import GraphPage from "@/components/graphpage";


export default function IndexPage() {
	return (
		<>
		{/* <Navbar/> */}
		<LandingPage/>
		<ExpenseTable/>
		<GraphPage/>
		</>
	);
}
