import { Field } from 'formik'

const SelectComponent = (props) =>{

    const {name, options, firstOption, ...rest} = props

    return(
        <div className="form-control">
            <Field as="select" id={name} name={name} {...rest}>
                <option 
                value={firstOption}>
                    {firstOption}
                </option>
                {
                    options.map(option => {
                        return(
                            
                            <option key={option.id} value={option.id}>
                                {option.naziv}
                            </option>
                        )
                    })
                }
            </Field>
        </div>
    )

}

export default SelectComponent;