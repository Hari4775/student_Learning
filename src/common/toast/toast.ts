import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface toastProps {
    message?: string;
    type?: string;
    theme?: string;
}

export const showNotification = (Toast: toastProps) => {
    const {
        message = "",
        type = "",
        theme = ""
    } = Toast;

    switch (theme) {
        case "light": {
            switch (type) {
                case "info":
                    toast.info(message);
                    break;
                case "error":
                    toast.error(message);
                    break;
                case "success":
                    toast.success(message);
                    break;
                case "warn":
                    toast.warn(message);
                    break;
            };
            break;
        }
        case "coloured": {
            switch (type) {
                case "info":
                    toast.info(message, { theme: "colored" });
                    break;
                case "error":
                    toast.error(message, { theme: "colored" });
                    break;
                case "success":
                    toast.success(message, { theme: "colored" });
                    break;
                case "warn":
                    toast.warn(message, { theme: "colored" });
                    break;
            };
            break;
        }
        case "dark": {
            switch (type) {
                case "info":
                    toast.info(message, { theme: "dark" });
                    break;
                case "error":
                    toast.error(message, { theme: "dark" });
                    break;
                case "success":
                    toast.success(message, { theme: "dark" });
                    break;
                case "warn":
                    toast.warn(message, { theme: "dark" });
                    break;
            };
            break;
        }
        default:
            switch (type) {
                case "info":
                    toast.info(message);
                    break;
                case "error":
                    toast.error(message);
                    break;
                case "success":
                    toast.success(message);
                    break;
                case "warn":
                    toast.warn(message);
                    break;
            };
            break;
    }
}
