import { createContext, useContext, useReducer, useCallback } from "react";

import {postResume, getLoginUserResume, delLogUserResume} from './ResumeApi';

import {resumeReducer} from './ResumeReducer';
import { resumeActionsTypes } from "./ResumeActionsTypes";

const ResumeContext = createContext();

const initialResume = [];

const useResumeContext = () => {
  const context = useContext(ResumeContext);

  if (typeof context === "undefined") {
    throw new Error("useUsersContext must be used into UsersProvider!");
  }

  return context;
};

export const ResumeProvider = ({ children }) => {
    const [{ resume }, dispatchResume] = useReducer(resumeReducer, {
        resume: initialResume,
    });
  
    const fetchUserResume = useCallback(async (IdUser) =>{
      const data = await getLoginUserResume(IdUser);
      dispatchResume({
        type: resumeActionsTypes.ADD_RESUME,
        payload: { data },
      });
    },[])
  
    const addResume = useCallback( async (resume) => {
      await postResume(resume);
      dispatchResume({
        type: resumeActionsTypes.ADD_RESUME,
        payload: { resume },
      });
    }, []);
  
    const removeUserResume = useCallback((userId) => {
        delLogUserResume(userId);
        dispatchResume({
        type: resumeActionsTypes.REMOVE_RESUME,
        payload: { userId },
      });
    }, []);
  
    return (
      <ResumeContext.Provider
        value={{
            resume,
          addResume,
          removeUserResume,
          fetchUserResume,
        }}
      >
        {children}
      </ResumeContext.Provider>
    );
  };
  
  export default useResumeContext;