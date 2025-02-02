<template>
  <ul class="dashboard-navigation">
    <li>
      <h3>Navigation</h3>
    </li>
    <li>
      <NuxtLink to="/dashboard">Dashboard</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/edit-profile">Edit Profile</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/edit-address">Edit Address</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/order-history">Order History</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/order-details">Order Details</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/address">Address</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/password">Password</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/my-account">Log Out</NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  name: "DashboardNavigation",
};
</script>
