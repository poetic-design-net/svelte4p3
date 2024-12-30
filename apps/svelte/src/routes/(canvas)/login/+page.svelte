<script lang="ts">
  import { enhance } from '$app/forms';
  import { Input } from '$lib/components/ui/input';
  import { Button } from '$lib/components/ui/button';
  import DynamicIcon from '$lib/components/DynamicIcon.svelte';
  import { ICONS } from '$payload/blocks/features';

  export let form: { error: string } | null = null;
  
  let email = '';
  let password = '';
</script>

<div class="min-h-screen flex items-center justify-center bg-background px-4 py-12">
  <div class="w-full max-w-md bg-card rounded-lg shadow p-8">
    <h2 class="text-center text-2xl font-bold leading-9 tracking-tight text-foreground mb-8">
      Anmelden
    </h2>
    <form class="space-y-6" method="POST" use:enhance>
      {#if form?.error}
      <div class="rounded-md bg-destructive/15 p-4 mb-4">
        <div class="flex">
          <div class="text-sm text-destructive">
              {form.error}
            </div>
          </div>
        </div>
      {/if}

      <div class="space-y-2">
        <label for="email" class="text-sm font-medium text-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          E-Mail-Adresse
        </label>
        <Input
          type="email"
          id="email"
          name="email"
          bind:value={email}
          autocomplete="email"
          placeholder="ihre@email.de"
          required
        />
      </div>

      <div class="space-y-2">
        <label for="password" class="text-sm font-medium text-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Passwort
        </label>
        <Input
          type="password"
          id="password"
          name="password"
          bind:value={password}
          autocomplete="current-password"
          placeholder="••••••••"
          required
        />
      </div>

      <Button type="submit" class="w-full">
        <DynamicIcon iconType={ICONS.LOGIN} className="mr-2" />
        Anmelden
      </Button>
    </form>
  </div>
</div>
