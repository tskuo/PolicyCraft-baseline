<script lang="ts">
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
	import PolicyEditForm from '$lib/components/PolicyEditForm.svelte';
	import PolicyEditAIPanel from '$lib/components/PolicyEditAIPanel.svelte';
	export let data;
</script>

<div class="grid md:grid-cols-4">
	<div class="md:col-span-3 p-2">
		<Breadcrumb.Root class="my-2 hidden md:block">
			<Breadcrumb.List>
				<Breadcrumb.Item>
					<Breadcrumb.Link href="/policies">Policy Repository</Breadcrumb.Link>
				</Breadcrumb.Item>
				<Breadcrumb.Separator />
				<Breadcrumb.Item>
					<Breadcrumb.Link href="/policies/{data.policy.id}">Policy</Breadcrumb.Link>
				</Breadcrumb.Item>
				<Breadcrumb.Separator />
				<Breadcrumb.Item>
					<Breadcrumb.Page>Editing Policy</Breadcrumb.Page>
				</Breadcrumb.Item>
			</Breadcrumb.List>
		</Breadcrumb.Root>
		<PolicyEditForm
			data={data.form}
			cases={data.cases}
			policy={data.policy}
			userId={data.user?.userId}
			userRole={data.user?.role}
			userCounts={data.userCounts}
		/>
	</div>
	<!-- <div class="md:col-span-1 p-2">
		<PolicyEditAIPanel
			cases={data.cases}
			policyDescription={data.policy.description}
			policyId={data.policy.id}
		/>
	</div> -->
</div>
