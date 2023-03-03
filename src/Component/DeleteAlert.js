import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";



export function deleteAlert(id){
     
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(`/DeleteBlog/${id}`)
          .then(data=>{
            toast.success('delete success')
              window.location.reload(true);
          })
          .catch()
         
         
        }
      })
}