import { ErrorMessage, useField } from "formik"
import { TextField, Button, Typography, FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material';
interface Props {
    variant?: 'standard';
    name: string;
    type: string;
    placeholder?: string;
    [x: string]: any
}

export const CustomTextInput = (props: Props) => {

    const [field] = useField(props)

    return (
        <>
            <TextField 
               fullWidth
          margin="normal"
             variant="standard"
            {...field} {...props} />
            <ErrorMessage name={props.name} component="span" className="error" />
        </>
    )
}
