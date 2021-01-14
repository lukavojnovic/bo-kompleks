import { Field } from 'formik'
const SelectKatComponent = (props) =>{

    const {name, options, firstOption, ...rest} = props

    return(
        <div className="form-control">
            <Field as="select" id={name} name={name} {...rest}>
                <option 
                value={firstOption}>
                    {firstOption}
                </option>
                {
                    options.forEach((key, value)=>{
                        console.log(`${key} - ${value}`)
                        return(
                            <option key={key} value={key}>
                                {value}
                            </option>
                        )
                    })
                }
            </Field>
        </div>
    )

}

export default SelectKatComponent;