import { useContext } from 'react'
import { TodoDataContext } from '../context/TodoDataContext';


// to check and ensure that we are within the component tree
export const useTodoDataContext = () => {

    const context = useContext(TodoDataContext);

    if (!context) {
        throw Error('useSchoolContext must be used inside a TimeContextProvider')
    }

    return context;

}

// export default useWorkoutsContext;