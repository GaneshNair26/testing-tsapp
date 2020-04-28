import * as React from 'react';


//import { iconAddGlyph, iconSearch } from '@wfp/icons';

export interface IButtonProps {
  children?: React.ReactNode,
  
  disabled?:boolean

  click?:boolean
  onClick?: (click:boolean) => void
  backgroundColor?:string  
  color?:string
  icon?: string
  outline?:boolean
  isIcon?:boolean
  
}




export default (props: IButtonProps) => {
  const {backgroundColor,color,disabled} = props;
  return (
    <div>
       <button className="btn btn-primary"  style={{backgroundColor,color}}  disabled={disabled} onClick={() =>
    props.click === true && ( alert(" Clicked"))}   type="button">
    {props.children}
    
   

            


  </button> 
   </div>

  )

  
  }
