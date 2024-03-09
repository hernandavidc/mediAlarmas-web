<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const handleLogin = () => {
  router.push('/home')
}
</script>

<template>
  <main class="container">
    <p class="text-center mt-100 mb-4">
      <svg width="48" height="39" viewBox="0 0 48 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_119_512)">
          <path d="M5.29509 4.99875C5.20453 2.39812 7.23075 0 9.96956 0H38.0339C40.7727 0 42.7989 2.39812 42.7084 4.99875C42.6214 7.49691 42.7343 10.733 43.5487 13.3716C44.3658 16.0183 45.7435 17.6913 48 17.9062V20.3438C45.7435 20.5587 44.3658 22.2317 43.5487 24.8784C42.7343 27.517 42.6214 30.7531 42.7084 33.2513C42.7989 35.8519 40.7727 38.25 38.0339 38.25H9.96956C7.23075 38.25 5.20453 35.8519 5.29519 33.2513C5.38209 30.7531 5.26912 27.517 4.45463 24.8784C3.63769 22.2317 2.25656 20.5587 0 20.3438V17.9062C2.25647 17.6913 3.63769 16.0183 4.45463 13.3716C5.26912 10.733 5.38209 7.49691 5.29509 4.99875Z" fill="url(#paint0_linear_119_512)"/>
          <g filter="url(#filter0_d_119_512)">
            <path d="M25.0409 29.2927C29.475 29.2927 32.147 27.1217 32.147 23.5407C32.147 20.8338 30.2405 18.8742 27.4096 18.564V18.4512C29.4894 18.1128 31.1215 16.1814 31.1215 14.0244C31.1215 10.951 28.6951 8.94897 24.9976 8.94897H16.6782V29.2927H25.0409ZM19.9135 11.529H24.2177C26.5575 11.529 27.8862 12.5722 27.8862 14.4614C27.8862 16.4775 26.3408 17.6053 23.5388 17.6053H19.9135V11.529ZM19.9135 26.7128V20.0162H24.1887C27.2507 20.0162 28.8395 21.144 28.8395 23.3433C28.8395 25.5426 27.2941 26.7128 24.3765 26.7128H19.9135Z" fill="url(#paint1_linear_119_512)"/>
            <path d="M25.0409 29.2927C29.475 29.2927 32.147 27.1217 32.147 23.5407C32.147 20.8338 30.2405 18.8742 27.4096 18.564V18.4512C29.4894 18.1128 31.1215 16.1814 31.1215 14.0244C31.1215 10.951 28.6951 8.94897 24.9976 8.94897H16.6782V29.2927H25.0409ZM19.9135 11.529H24.2177C26.5575 11.529 27.8862 12.5722 27.8862 14.4614C27.8862 16.4775 26.3408 17.6053 23.5388 17.6053H19.9135V11.529ZM19.9135 26.7128V20.0162H24.1887C27.2507 20.0162 28.8395 21.144 28.8395 23.3433C28.8395 25.5426 27.2941 26.7128 24.3765 26.7128H19.9135Z" stroke="white" stroke-width="0.1"/>
          </g>
        </g>
        <defs>
          <filter id="filter0_d_119_512" x="0.628219" y="-3.10107" width="47.5687" height="52.4438" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="8"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_119_512"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_119_512" result="shape"/>
          </filter>
          <linearGradient id="paint0_linear_119_512" x1="7.13241" y1="1.01231" x2="49.0762" y2="34.3073" gradientUnits="userSpaceOnUse">
            <stop stop-color="#89CFF0"/>
            <stop offset="1" stop-color="#E6E6FA"/>
          </linearGradient>
          <linearGradient id="paint1_linear_119_512" x1="18.1414" y1="10.288" x2="27.5169" y2="26.1441" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#F1E5FC"/>
          </linearGradient>
          <clipPath id="clip0_119_512">
            <rect width="48" height="38.25" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </p>
    <h1 class="my-4 text-center mb-3">Acceso MediAlarms</h1>
    <p class="text-center mb-4 text-secondary w-100">¡Bienvenido de nuevo! Por favor, ingresa tus datos.</p>
    <div class="row justify-content-center w-360 mx-auto">
      <div class="col-md-12 p-0">
        <div class="card border-0">
          <div class="card-body p-0">
            <form class="mb-4">
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  value="hernan.alvarez@mail.com"
                />
              </div>
              <div class="mb-4">
                <label for="password" class="form-label">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                />
              </div>
              <div class="d-flex justify-content-between mb-3">
                <div class="mb-3 form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="remember"
                  />
                  <label class="form-check-label" for="remember">
                    Recuérdame
                  </label>
                </div>
                <div>
                  <a href="#">Olvidé mi contraseña</a>
                </div>
              </div>
              <button type="submit" class="btn btn-primary w-100 mb-3" @click="handleLogin">
                Iniciar sesión
              </button>
              <button type="button" class="btn btn-outline-primary w-100" @click="handleLogin">
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_119_584)">
                    <rect width="16" height="16" transform="translate(0 0.25)" fill="white" fill-opacity="0.01"/>
                    <g clip-path="url(#clip1_119_584)">
                      <path d="M15.5446 6.80706C15.6379 7.34402 15.6844 7.88806 15.6836 8.43306C15.6836 10.8671 14.8136 12.9251 13.2996 14.3181H13.3016C11.9776 15.5411 10.1576 16.2491 7.99965 16.2491C5.87792 16.2491 3.84309 15.4062 2.34279 13.9059C0.842504 12.4056 -0.000350952 10.3708 -0.000350952 8.24906C-0.000350952 6.12733 0.842504 4.0925 2.34279 2.59221C3.84309 1.09192 5.87792 0.249063 7.99965 0.249063C9.98559 0.225805 11.9035 0.971896 13.3516 2.33106L11.0676 4.61506C10.242 3.82804 9.14015 3.39705 7.99965 3.41506C5.91265 3.41506 4.13965 4.82306 3.50765 6.71906C3.17256 7.71257 3.17256 8.78856 3.50765 9.78206H3.51065C4.14565 11.6751 5.91565 13.0831 8.00265 13.0831C9.08065 13.0831 10.0066 12.8071 10.7246 12.3191H10.7216C11.1386 12.0429 11.4952 11.6851 11.77 11.2672C12.0448 10.8494 12.2321 10.3803 12.3206 9.88806H7.99965V6.80806H15.5446V6.80706Z" fill="#0D6EFD"/>
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_119_584">
                      <rect width="16" height="16" fill="white" transform="translate(0 0.25)"/>
                    </clipPath>
                    <clipPath id="clip1_119_584">
                      <rect width="16" height="16" fill="white" transform="translate(0 0.25)"/>
                    </clipPath>
                  </defs>
                </svg>
                Iniciar sesión con Google
              </button>
            </form>
            <p class="text-center text-secondary">
              ¿No tienes cuenta? <a href="#">Regístrate</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
