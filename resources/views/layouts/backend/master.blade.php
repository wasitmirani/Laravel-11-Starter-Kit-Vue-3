<!DOCTYPE html>
<html lang="en" class="light-style layout-navbar-fixed layout-menu-fixed layout-compact " dir="ltr"
    data-theme="theme-default" data-assets-path="/backend/assets/" data-template="vertical-menu-template"
    data-style="light">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ config('app.name') }} || </title>


    <meta name="description"
        content="Materialize – is the most developer friendly &amp; highly customizable Admin Dashboard Template.">
    <meta name="keywords"
        content="dashboard, material, material design, bootstrap 5 dashboard, bootstrap 5 design, bootstrap 5">
    <!-- Canonical SEO -->
    <link rel="canonical" href="">


    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="{{ asset('/backend/assets/img/favicon/favicon.ico') }}">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">

    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&ampdisplay=swap"
        rel="stylesheet">


    <!-- Icons -->
    <link rel="stylesheet" href="{{ asset('/backend/assets/vendor/fonts/remixicon/remixicon.css') }}')}}">
    <link rel="stylesheet" href="{{ asset('/backend/assets/vendor/fonts/flag-icons.css') }}">

    <!-- Menu waves for no-customizer fix -->
    <link rel="stylesheet" href="{{ asset('/backend/assets/vendor/libs/node-waves/node-waves.css') }}">

    <!-- Core CSS -->
    <link rel="stylesheet" href="{{ asset('/backend/assets/vendor/css/rtl/core.css') }}"
        class="template-customizer-core-css">
    <link rel="stylesheet" href="{{ asset('/backend/assets/vendor/css/rtl/theme-default.css') }}"
        class="template-customizer-theme-css">
    <link rel="stylesheet" href="{{ asset('/backend/assets/css/demo.css') }}">

    <!-- Vendors CSS -->
    <link rel="stylesheet" href="{{ asset('/backend/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css') }}">
    <link rel="stylesheet" href="{{ asset('/backend/assets/vendor/libs/typeahead-js/typeahead.css') }}">
    <link rel="stylesheet" href="{{ asset('/backend/assets/vendor/libs/datatables-bs5/datatables.bootstrap5.css') }}">
    <link rel="stylesheet"
        href="{{ asset('/backend/assets/vendor/libs/datatables-responsive-bs5/responsive.bootstrap5.css') }}">
    <link rel="stylesheet" href="{{ asset('/backend/assets/vendor/libs/apex-charts/apex-charts.css') }}">
    <link rel="stylesheet" href="{{ asset('/backend/assets/vendor/libs/swiper/swiper.css') }}">
    <link rel="stylesheet" href="{{ asset('/backend/assets/vendor/css/pages/cards-statistics.css') }}">

    <script src="{{ asset('/backend/assets/vendor/js/helpers.js') }}')}}"></script>

    <script src="{{ asset('/backend/assets/vendor/js/template-customizer.js') }}')}}"></script>
    <script src="{{ asset('/backend/assets/js/config.js') }}')}}"></script>
</head>

<body>


    <div id="app">

    </div>
    @vite(['resources/ts/backend/app.ts', 'resources/css/app.css'])
    {{-- <script type="module" src="{{ asset('/build/assets/app.ef37314d.js')}}') }}"></script> --}}


    <script>
        @auth
        window.user = {!! json_encode(Auth::user()->load(['roles']), true) !!};
        window.token = "{{ auth()->user()->token }}";
        window.config = {
            'app_name': '{{ config('app.name') }}',
            'logo': '{{ asset('frontend/assets/img/logo.png') }}',
        }
        window.permissions = {!! json_encode(Auth::user()->getPermissionsViaRoles()->pluck('name'), true) !!};
        @else
            window.user = [];
            window.permissions = [];
            window.token = "";
        @endauth
        localStorage.removeItem('permissions');
        localStorage.setItem('permissions', JSON.stringify(permissions))
    </script>

    <!-- endbuild -->
    <!-- Core JS -->
    <!-- build:js assets/vendor/js/core.js')}} -->
    <script src="{{ asset('/backend/assets/vendor/libs/jquery/jquery.js') }}"></script>
    <script src="{{ asset('/backend/assets/vendor/libs/popper/popper.js') }}"></script>
    <script src="{{ asset('/backend/assets/vendor/js/bootstrap.js') }}"></script>
    <script src="{{ asset('/backend/assets/vendor/libs/node-waves/node-waves.js') }}"></script>
    <script src="{{ asset('/backend/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js') }}"></script>
    <script src="{{ asset('/backend/assets/vendor/libs/hammer/hammer.js') }}"></script>
    <script src="{{ asset('/backend/assets/vendor/libs/i18n/i18n.js') }}"></script>
    <script src="{{ asset('/backend/assets/vendor/libs/typeahead-js/typeahead.js') }}"></script>
    <script src="{{ asset('/backend/assets/vendor/js/menu.js') }}"></script>
    <!-- Vendors JS -->
    <script src="{{ asset('/backend/assets/vendor/libs/datatables-bs5/datatables-bootstrap5.js') }}"></script>
    <script src="{{ asset('/backend/assets/vendor/libs/apex-charts/apexcharts.js') }}"></script>
    <script src="{{ asset('/backend/assets/vendor/libs/swiper/swiper.js') }}"></script>
    <!-- Main JS -->
    <script src="{{ asset('/backend/assets/js/main.js') }}"></script>
    <!-- Page JS -->
    <script src="{{ asset('/backend/assets/js/app-ecommerce-dashboard.js') }}"></script>
</body>
</html>
