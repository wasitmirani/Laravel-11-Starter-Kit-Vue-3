


// import { useNotification } from "@kyvg/vue3-notification";
import { useRoute } from "vue-router";
import { ref, onMounted,Ref,UnwrapRef,reactive, UnwrapNestedRefs,defineAsyncComponent  } from "vue";
import router  from "../router"
// import Swal from 'sweetalert2'
// useNotification()
const notification = "";



class Helper
{

    public static base_url =window.location.origin;

    useDynamicReactive<T extends object>(initialValue: T): UnwrapNestedRefs<T> {
        return reactive(initialValue);
    }
    useDynamicRef<T>(initialValue: T): Ref<UnwrapRef<T>> {
        return ref(initialValue) as Ref<UnwrapRef<T>>;
    }
    useDynamicOnMounted(callback?: () => void) {
        onMounted(() => {
          // Execute any optional code when the component mounts
          if (callback) {
            callback();
          }

          // Return the onMounted function if needed
          return onMounted;
        });
    }
     useDynamicDefineAsyncComponent<T>(loader: () => Promise<T>, callback?: () => void) {
        return defineAsyncComponent(() => {
          if (callback) {
            onMounted(() => {
              callback();
            });
          }

          // Dynamically load the component
          return loader();
        });
      }

    route = ()=>{
        return useRoute();
    };

    // Swal = ()=>{
    //   return Swal;
    // }
    router = ()=>{
     return router;
    }
    NotifyAlert=(status:number, title:string, type:string, response:any)=>{
       notification.notify(this.alertNotify(status,title,type,response));
    }

    alertNotify=(status:number, title:string, type:string, response:any) : any =>{
        switch (status) {
          case 200:
            return { title: title, type: type, text: response.message ?? response };
            break;
          case 201:
            return { title: title, type: type, text: response.message ?? response };
            break;
          case 422:
            return {
              title: `Oops, Unprocessable Entity ${status} Error! `,
              type: type,
              text: response.message ?? response,
            };
            break;
          case 404:
            return {
              title: `Oops, Not Found ${status} Error! `,
              type: type,
              text: response.message ?? response,
            };
            break;
          case 500:
            return{
              title: `Oops, Something Went Wrong ${status} Error! `,
              type: type,
              text: response.message ?? response,
            };
            break;
        }
      }

    appendValidateClass =(errors:any, value:string)=> {
        if (errors && errors[value])
           return "validate";
    }

    auth(){
        return window.user;
    }

}


export const Helpers = new Helper();
