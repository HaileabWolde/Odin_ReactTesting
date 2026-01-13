const   CardComponent = ({id,   title})=>{
return(
    <li>
         <h1 className="text-[hsl(14,65%,9%)] font-bold">{title}</h1>
        <div className="border-1 border-solid border-[hsl(14,25%,72%)]"></div>

    </li>
) 
}
export default  CardComponent;