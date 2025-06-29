import axios from "axios";
import Swal from "sweetalert2";

export const buyCourse = async (courseId: number, textContent: string) => {
  const result = await Swal.fire({
    title: "Atentie",
    text: textContent,
    icon: "warning",
    confirmButtonText: "Continua",
    showCancelButton: true,
    cancelButtonText: "Renunta",
  });

  if (result.isConfirmed) {
    await callBuyCourse(courseId);
  }
};

async function callBuyCourse(courseId: number) {
  // Show loading state
  Swal.fire({
    title: "Se procesează...",
    text: "Vă rugăm să așteptați",
    allowOutsideClick: false,
    allowEscapeKey: false,
    showConfirmButton: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  try {
    const item = [
      {
        id: courseId,
        quantity: 1,
      },
    ];

    const response = await axios.post(
      import.meta.env.VITE_STRIPE_URL,
      JSON.stringify(item),
      {
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      }
    );

    const data = response.data;

    if (data.url) {
      // Show success message before redirect
      await Swal.fire({
        title: "Success!",
        text: "Redirecționare către plată...",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });

      window.location.href = data.url;
    } else if (data.error) {
      // Show error from server
      await Swal.fire({
        title: "Eroare!",
        text: `Checkout failed: ${data.error}`,
        icon: "error",
        confirmButtonText: "OK",
      });
    } else {
      // Show generic error for unexpected response
      await Swal.fire({
        title: "Eroare!",
        text: "Răspuns neașteptat de la server",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  } catch (error) {
    console.error("Checkout error:", error);

    // Show network/request error
    await Swal.fire({
      title: "Eroare de conexiune!",
      text: "Nu s-a putut conecta la server. Vă rugăm să încercați din nou.",
      icon: "error",
      confirmButtonText: "OK",
    });
  }
}
