import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { eID, list, createRow, deleteRow, updateRow } from "src/consts";

export const useRows = () => {
    return useQuery({
      queryKey: ["ROWS"],
      queryFn: async () => {
        const { data } = await axios.get(list);
        return data;
      },
    });
  };
  
export const useCreate = (id:number)=>{
    return useMutation({
        mutationKey:["CREATE", id],
        mutationFn: async (id:number)=>{
            return axios.post(
                createRow,
                {
                    "parentId":id,
                    "equipmentCosts": 0,
                    "estimatedProfit": 0,
                    "machineOperatorSalary": 0,
                    "mainCosts": 0,
                    "materials": 0,
                    "mimExploitation": 0,
                    "overheads": 0,
                    "rowName": "string",
                    "salary": 0,
                    "supportCosts": 0
                }
            )
        }
    })
}

export const useUpdate = (id:number, values:{"equipmentCosts": 0,
  "estimatedProfit": number,
  "machineOperatorSalary": number,
  "mainCosts": number,
  "materials": number,
  "mimExploitation": number,
  "overheads": number,
  "rowName": string,
  "salary": number,
  "supportCosts": number})=>{
    return useMutation({
      mutationKey:['UPDATE', id, values],
      mutationFn: async (id, values) =>{
        return(axios.post(
          updateRow + id +'/update',
          values,
        ))
      }
    })
  }