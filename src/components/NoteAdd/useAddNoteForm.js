import {useForm} from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {useDispatch} from "react-redux";
import {addNote} from "../../redux/notesSlice";


const schema = yup.object().shape({
    name : yup.string().required(),
    amount : yup.string().required(),
    distance : yup.string().required()
})

function useAddNoteForm(closeModal) {
    const dispatch = useDispatch()
    const form = useForm({
        defaultValues: {},
        resolver: yupResolver(schema)
    })

    const submit = form.handleSubmit((value)=> {dispatch(addNote({...value,createDate : new Date() })); closeModal()})

    return {
        form,
        submit
    }
}

export default useAddNoteForm