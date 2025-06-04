import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { use } from 'react'

import Select, {components} from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();



// בשביל לעשות וי על מה שנבחר
const CustomOption = (props) => {
  return (
    <components.Option {...props}>
      <label style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        {/* Checkbox */}
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null} // This prevents React warnings
          onClick={(e) => {
            e.stopPropagation(); // Prevents the option itself from being clicked
            props.selectOption(props.data); // Triggers selection on checkbox click
            
          }}
          style={{ 
            marginLeft: '5px', 
            // Prevents interfering with the dropdown selection
            accentColor: '#002A78', }}
        />
        {/* Option Label */}
        {props.label}
      </label>
    </components.Option>
  );
};


 
// להביא את החץ 
const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <Image src="/downArrow.svg" alt="Custom Arrow" width={10} height={10} />
    </components.DropdownIndicator>
  );
};

export default function MadorsToggle({
  madors, 
  handleInputChange, 
  selectedMadors, 
  valueToEdit,
  fieldName
}) {

  
const pathName = usePathname();


    // עיצוב אישי
const customStyles = {
  control: (base, state) => ({
    ...base,
    borderColor: state.isFocused ? '#bcbfc5' : '#bcbfc5', // Customize the border color
    boxShadow: state.isFocused ? ' #bcbfc5' : null,
    borderRadius: '10px', // Rounding the borders
    paddingRight: '', // Add some padding for the custom arrow
    // padding: '0px',
    '&:hover': {
      borderColor: '#bcbfc5', // No hover color change
    },
  }),
  option: (base, state) => ({
    ...base,
    display: 'flex',
    justifyContent: 'space-between', // Places checkbox on the right
    backgroundColor:  'white',
    color: state.isSelected ? 'black' : 'inherit',
    direction: 'rtl', 
    padding: '10px 15px',
    position: 'relative',
    overflow: 'hidden', // Ensure overflow is hidden for the gradient effect
    
    ':hover': {
      backgroundColor: '#002A78',
      color: '#ffffff',
      borderRadius:'5px',
      '&:before': {
        content: 'none', // Prevents the line from appearing on hover
      },
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      left: '5%', // Start the shadow from 15%
      right: '5%', // End the shadow at 15%
      bottom: '0',
      height: '1px',
      backgroundColor: '#e9e9e9',
    },
    // borderRadius:'10px',
  }),
  menu: (base) => ({
    ...base,
    borderRadius: '10px', // Matching the rounded border for the dropdown menu
    marginTop: '0px',
    position: 'absolute',
    zIndex: '1',  
    paddingRight:'2px',
    padding: '0px'
    
    
  }),
  menuList: (base) => ({
    ...base,
    direction: 'ltr', // Change direction to right-to-left
    padding:'5px',
    maxHeight: '200px', // Adjust this value to fit approximately 5 items
    overflowY: 'auto',
    // ':hover': {
    //   cursor:'pointer'
    // },
  }),
  multiValue: (base) => ({
    ...base,
    backgroundColor: '#002A78', // Background color for selected items
    color:'white',
    borderRadius: '5px',
    display:pathName.includes('financialRequirements') ?"none": 'flex', // Hides the selected items in financialRequirements route
     
    
    // padding: '0px'
    // paddingRight:'5px',
    
  }),
  multiValueLabel: (base) => ({
    ...base,
    color: 'white',
    padding: '0px',
    // backgroundColor: "red" ,// Text color for selected item
    paddingRight: '5px',
    
  }),
  indicatorsContainer: (base) => ({
    ...base,
    paddingRight: '0px', // Removes the gap between the arrow and selected options
  }),
  placeholder: (base) => ({
    ...base,
    textAlign: 'right',
  }),
};
    
    //  אם המדורים שבאים זה מערך זה הופך את זה לערכים
    const format = Array.from(madors).map((mador)=>({
      label: mador,
      value: mador
    }))

    // מביא לערך את מה שאני בוחר או את מה שקיים בשביל לערוך
    const selectedValues = selectedMadors.length > 0
    ? format.filter(option => selectedMadors.includes(option.value))
    : format.filter(option => valueToEdit && valueToEdit.includes(option.value.trim())); // Make sure to trim spaces

    // מראה את המדורים שנבחרו
    const handleChange = (selected) => {
      const selectedValues = selected ? selected.map((option) => option.value) : [];
      handleInputChange(fieldName, selectedValues); // Update the selected values
    };
  return (
    <Select
    closeMenuOnSelect={false}
    components={{ ...animatedComponents, DropdownIndicator, Option: CustomOption }}
    isMulti
    options={format}
    hideSelectedOptions={false}
    styles={customStyles}
    value={selectedValues}
    onChange={handleChange}
    placeholder={'בחר מדורים'}
    />
  )
}
