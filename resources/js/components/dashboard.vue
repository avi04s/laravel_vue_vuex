<template>
<div>

        <navbar />
        <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Dashboard</div>

                    <div class="card-body">
                        Welcome User
                    </div>
                </div>
            </div>
        </div>

       
    </div>

</div>

</template>

<script>
    import navbar from './navbar.vue'
    export default {
        name:'dashboard',
        components:{
            navbar
        }
    }
</script>
