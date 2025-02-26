import toast from "react-hot-toast";

export function copyToClipboard(text: string) {
  if (navigator?.clipboard) {
    navigator.clipboard.writeText(text);
  } else {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  }
  toast.success("Copied to clipboard");
}
