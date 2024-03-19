import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getClasses,
  getRates,
  getStudents,
  setRateById,
  unsetRateById,
} from "./api";

export function useStudentData() {
  const queryClient = useQueryClient();

  const {
    data: students,
    isPending: studentsPending,
    isError: studentsError,
    error: studentsErrorDetail,
  } = useQuery({
    queryKey: ["students"],
    queryFn: getStudents,
    getClasses,
  });

  const {
    data: colums,
    isPending: columsPending,
    isError: columsError,
    error: columsErrorDetail,
  } = useQuery({
    queryKey: ["colums"],
    queryFn: getClasses,
  });

  const {
    data: rate,
    isPending: ratePending,
    isError: rateError,
    error: rateErrorDetail,
  } = useQuery({
    queryKey: ["rate"],
    queryFn: getRates,
  });

  const markAsAbsent = useMutation({
    mutationFn: setRateById,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["rate"] });
    },
  });

  const markAsPresent = useMutation({
    mutationFn: unsetRateById,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["rate"] });
    },
  });

  return {
    students,
    studentsPending,
    studentsError,
    studentsErrorDetail,
    colums,
    columsPending,
    columsError,
    columsErrorDetail,
    rate,
    ratePending,
    rateError,
    rateErrorDetail,
    markAsAbsent,
    markAsPresent,
  };
}
