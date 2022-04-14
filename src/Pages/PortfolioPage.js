import React,{useState} from 'react'
import { MainLayout, InnerLayout } from '../Styles/Layout';
import Title from '../components/SideBars/Title';
import portfolios from '../data/portfolios';
import Menu from '../components/Menu';
import Button from '../components/Utility/Button';

const allButtons=['All ',...new Set(portfolios.map((item)=>item.category))]
const PortfolioPage = () =>
{
    const [ menuItem, setMenuItems ] = useState( portfolios );
    const [ button, setButton ] = useState(allButtons);
   const filter = (button) => {
     if (button === "All") {
       setMenuItems(portfolios);
       return;
     }

     const filteredData = portfolios.filter((item) => item.category === button);
     setMenuItems(filteredData);
   };
    return (
        <MainLayout>
            <Title title={ "Portfolios" } span={ "Portfolios" } />
            <InnerLayout>
                <Button filter={ filter } button={ button}/>
            <Menu menuItem={menuItem}/>
            </InnerLayout>
        </MainLayout>
    )
}

export default PortfolioPage
