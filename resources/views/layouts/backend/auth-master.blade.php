<!DOCTYPE html>
<html lang="en" class="light-style layout-wide  customizer-hide" dir="ltr" data-theme="theme-default" data-assets-path="/backend/assets/" data-template="vertical-menu-template" data-style="light">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name') }} || @yield('title') </title>

    
    <meta name="description" content="{{config('app.name')}}">
    <meta name="keywords" content="{{config('app.name')}}">
    <!-- Canonical SEO -->
    <link rel="canonical" href="{{config('app.name')}}">
    

    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="{{ asset('/backend/assets/img/favicon/favicon.ico') }}">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">

    <!-- Icons -->
    <link rel="stylesheet" href="{{ asset('/backend/assets/vendor/fonts/remixicon/remixicon.css') }}">
    <link rel="stylesheet" href="{{ asset('/backend/assets/vendor/fonts/flag-icons.css') }}">
  
    
    <!-- Menu waves for no-customizer fix -->
    <link rel="stylesheet" href="{{ asset('/backend/assets/vendor/libs/node-waves/node-waves.css') }}">

    <!-- Core CSS -->
    <link rel="stylesheet" href="{{ asset('/backend/assets/vendor/css/rtl/core.css') }}" class="template-customizer-core-css">
    <link rel="stylesheet" href="{{ asset('/backend/assets/vendor/css/rtl/theme-default.css') }}" class="template-customizer-theme-css">
    <link rel="stylesheet" href="{{ asset('/backend/assets/css/demo.css') }}">
    
    <!-- Vendors CSS -->
    <link rel="stylesheet" href="{{ asset('/backend/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css') }}">
    <link rel="stylesheet" href="{{ asset('/backend/assets/vendor/libs/typeahead-js/typeahead.css') }}">
    <!-- Vendor -->
    <link rel="stylesheet" href="{{ asset('/backend/assets/vendor/libs/@form-validation/form-validation.css') }}">

    <!-- Page CSS -->
    <!-- Page -->
<link rel="stylesheet" href="{{ asset('/backend/assets/vendor/css/pages/page-auth.css') }}">

    <!-- Helpers -->
    <script src="{{ asset('/backend/assets/vendor/js/helpers.js') }}"></script>
    <!--! Template customizer & Theme config files MUST be included after core stylesheets and helpers.js')}} in the <head> section -->
    <!--? Template customizer: To hide customizer set displayCustomizer value false in config.js')}}.  -->
    <script src="{{ asset('/backend/assets/vendor/js/template-customizer.js') }}"></script>
    <!--? Config:  Mandatory theme config file contain global vars & default theme options, Set your preferred theme option in this file.  -->
    <script src="{{ asset('/backend/assets/js/config.js') }}"></script>
    
</head>

<body>

  <!-- Content -->

<div class="position-relative">
  <div class="authentication-wrapper authentication-basic container-p-y p-4 p-sm-0">
    <div class="authentication-inner py-6">

                @yield('content')
          </div>
        </div>
      </div>
      

  <script src="{{ asset('/backend/assets/vendor/libs/jquery/jquery.js') }}"></script>
  <script src="{{ asset('/backend/assets/vendor/libs/popper/popper.js') }}"></script>
  <script src="{{ asset('/backend/assets/vendor/js/bootstrap.js') }}"></script>
  <script src="{{ asset('/backend/assets/vendor/libs/node-waves/node-waves.js') }}"></script>


  <script src="{{ asset('/backend/assets/vendor/libs/typeahead-js/typeahead.js') }}"></script>

  
  <!-- endbuild -->

  <!-- Vendors JS -->
  <script src="{{ asset('/backend/assets/vendor/libs/@form-validation/popular.js') }}"></script>
<script src="{{ asset('/backend/assets/vendor/libs/@form-validation/bootstrap5.js') }}"></script>
<script src="{{ asset('/backend/assets/vendor/libs/@form-validation/auto-focus.js') }}"></script>

  <!-- Main JS -->
  <script src="{{ asset('/backend/assets/js/main.js') }}"></script>
  

  @if(!Request::routeIs('register'))
  <!-- Page JS -->
  <script src="{{ asset('/backend/assets/js/pages-auth.js') }}"></script>
  @else 
  
  <!-- Page JS -->
  <script src="{{ asset('/backend/assets/js/pages-auth-multisteps.js')}}"></script>
  @endif
  
</body>

</html>

<!-- beautify ignore:end -->
