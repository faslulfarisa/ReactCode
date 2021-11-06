import React from "react";
import axios from "axios";
const view_all="http://localhost:8083//list";

class StudServices{
    createstud(student){
        return axios.post("http://localhost:8083//create",student);
    }
        getusers(){
            return axios.get(view_all);
        }

    
}
export default new StudServices();