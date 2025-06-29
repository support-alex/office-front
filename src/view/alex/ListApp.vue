/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
<template>
 <div class="d-flex flex-column flex-root">
			<!--begin::Page-->
			<div class="d-flex flex-row flex-column-fluid page">
				
				<!--begin::Wrapper-->
				<div class="d-flex flex-column flex-row-fluid wrapper" style="padding-top:0;" id="kt_wrapper">
					
					<!--begin::Content-->
					<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
						<!--begin::Subheader-->
						<div class="subheader py-2 py-lg-4 subheader-transparent" id="kt_subheader">
							<div class="container d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
								<!--begin::Details-->
								<div class="d-flex align-items-center flex-wrap mr-2">
									<!--begin::Title-->
									<h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Projects</h5>
									<!--end::Title-->
									<!--begin::Separator-->
									<div class="subheader-separator subheader-separator-ver mt-2 mb-2 mr-5 bg-gray-200"></div>
									<!--end::Separator-->
									<!--begin::Search Form-->
									<div class="d-flex align-items-center" id="kt_subheader_search">
										<span class="text-dark-50 font-weight-bold" id="kt_subheader_total">54 Total</span>
										<form class="ml-5">
											<div class="input-group input-group-sm input-group-solid" style="max-width: 175px">
												<input type="text" class="form-control" id="kt_subheader_search_form" placeholder="Search..." />
												<div class="input-group-append">
													<span class="input-group-text">
														<span class="svg-icon">
															
														</span>
														<!--<i class="flaticon2-search-1 icon-sm"></i>-->
													</span>
												</div>
											</div>
										</form>
									</div>
									<!--end::Search Form-->
									<!--begin::Group Actions-->
									<div class="d-flex- align-items-center flex-wrap mr-2 d-none" id="kt_subheader_group_actions">
										<div class="text-dark-50 font-weight-bold">
										<span id="kt_subheader_group_selected_rows">23</span>Selected:</div>
										<div class="d-flex ml-6">
											<div class="dropdown mr-2" id="kt_subheader_group_actions_status_change">
												<button type="button" class="btn btn-light-primary font-weight-bolder btn-sm dropdown-toggle" data-toggle="dropdown">Update Status</button>
												<div class="dropdown-menu p-0 m-0 dropdown-menu-sm">
													<ul class="navi navi-hover pt-3 pb-4">
														<li class="navi-header font-weight-bolder text-uppercase text-primary font-size-lg pb-0">Change status to:</li>
														<li class="navi-item">
															<a href="#" class="navi-link" data-toggle="status-change" data-status="1">
																<span class="navi-text">
																	<span class="label label-light-success label-inline font-weight-bold">Approved</span>
																</span>
															</a>
														</li>
														<li class="navi-item">
															<a href="#" class="navi-link" data-toggle="status-change" data-status="2">
																<span class="navi-text">
																	<span class="label label-light-danger label-inline font-weight-bold">Rejected</span>
																</span>
															</a>
														</li>
														<li class="navi-item">
															<a href="#" class="navi-link" data-toggle="status-change" data-status="3">
																<span class="navi-text">
																	<span class="label label-light-warning label-inline font-weight-bold">Pending</span>
																</span>
															</a>
														</li>
														<li class="navi-item">
															<a href="#" class="navi-link" data-toggle="status-change" data-status="4">
																<span class="navi-text">
																	<span class="label label-light-info label-inline font-weight-bold">On Hold</span>
																</span>
															</a>
														</li>
													</ul>
												</div>
											</div>
											<button class="btn btn-light-success font-weight-bolder btn-sm mr-2" id="kt_subheader_group_actions_fetch" data-toggle="modal" data-target="#kt_datatable_records_fetch_modal">Fetch Selected</button>
											<button class="btn btn-light-danger font-weight-bolder btn-sm mr-2" id="kt_subheader_group_actions_delete_all">Delete All</button>
										</div>
									</div>
									<!--end::Group Actions-->
								</div>
								<!--end::Details-->
								<!--begin::Toolbar-->
								<div class="d-flex align-items-center">
									<!--begin::Button-->
									<a href="#" class=""></a>
									<!--end::Button-->
									<!--begin::Button-->
									<a href="custom/apps/projects/add-project.html" class="btn btn-light-primary font-weight-bold ml-2">Add Project</a>
									<!--end::Button-->
									<!--begin::Dropdown-->
									<div class="dropdown dropdown-inline ml-2" data-toggle="tooltip" title="Quick actions" data-placement="left">
										<a href="#" class="btn btn-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											<span class="svg-icon svg-icon-success svg-icon-2x">
												<!--begin::Svg Icon | path:assets/media/svg/icons/Files/File-plus.svg-->
												
												<!--end::Svg Icon-->
											</span>
										</a>
										<div class="dropdown-menu p-0 m-0 dropdown-menu-md dropdown-menu-right">
											<!--begin::Naviigation-->
											<ul class="navi">
												<li class="navi-header font-weight-bold py-5">
													<span class="font-size-lg">Add New:</span>
													<i class="flaticon2-information icon-md text-muted" data-toggle="tooltip" data-placement="right" title="Click to learn more..."></i>
												</li>
												<li class="navi-separator mb-3 opacity-70"></li>
												<li class="navi-item">
													<a href="#" class="navi-link">
														<span class="navi-icon">
															<i class="flaticon2-shopping-cart-1"></i>
														</span>
														<span class="navi-text">Order</span>
													</a>
												</li>
												<li class="navi-item">
													<a href="#" class="navi-link">
														<span class="navi-icon">
															<i class="navi-icon flaticon2-calendar-8"></i>
														</span>
														<span class="navi-text">Members</span>
														<span class="navi-label">
															<span class="label label-light-danger label-rounded font-weight-bold">3</span>
														</span>
													</a>
												</li>
												<li class="navi-item">
													<a href="#" class="navi-link">
														<span class="navi-icon">
															<i class="navi-icon flaticon2-telegram-logo"></i>
														</span>
														<span class="navi-text">Project</span>
													</a>
												</li>
												<li class="navi-item">
													<a href="#" class="navi-link">
														<span class="navi-icon">
															<i class="navi-icon flaticon2-new-email"></i>
														</span>
														<span class="navi-text">Record</span>
														<span class="navi-label">
															<span class="label label-light-success label-rounded font-weight-bold">5</span>
														</span>
													</a>
												</li>
												<li class="navi-separator mt-3 opacity-70"></li>
												<li class="navi-footer pt-5 pb-4">
													<a class="btn btn-light-primary font-weight-bolder btn-sm" href="#">More options</a>
													<a class="btn btn-clean font-weight-bold btn-sm d-none" href="#" data-toggle="tooltip" data-placement="right" title="Click to learn more...">Learn more</a>
												</li>
											</ul>
											<!--end::Naviigation-->
										</div>
									</div>
									<!--end::Dropdown-->
								</div>
								<!--end::Toolbar-->
							</div>
						</div>
						<!--end::Subheader-->
						<!--begin::Entry-->
						<div class="d-flex flex-column-fluid">
							<!--begin::Container-->
							<div class="container">
								<!--begin::Row-->
								<div class="row">
									<!--begin::Col-->
									<div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
										<!--begin::Card-->
										<div class="card card-custom gutter-b card-stretch">
											<!--begin::Body-->
											<div class="card-body pt-4">
												<!--begin::Toolbar-->
												<div class="d-flex justify-content-end">
													<div class="dropdown dropdown-inline" data-toggle="tooltip" title="Quick actions" data-placement="left">
														<a href="#" class="btn btn-clean btn-hover-light-primary btn-sm btn-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
															<i class="ki ki-bold-more-hor"></i>
														</a>
														<div class="dropdown-menu dropdown-menu-md dropdown-menu-right">
															<!--begin::Navigation-->
															<ul class="navi navi-hover">
																<li class="navi-header font-weight-bold py-4">
																	<span class="font-size-lg">Choose Label:</span>
																	<i class="flaticon2-information icon-md text-muted" data-toggle="tooltip" data-placement="right" title="Click to learn more..."></i>
																</li>
																<li class="navi-separator mb-3 opacity-70"></li>
																<li class="navi-item">
																	<a href="#" class="navi-link">
																		<span class="navi-text">
																			<span class="label label-xl label-inline label-light-success">Customer</span>
																		</span>
																	</a>
																</li>
																<li class="navi-item">
																	<a href="#" class="navi-link">
																		<span class="navi-text">
																			<span class="label label-xl label-inline label-light-danger">Partner</span>
																		</span>
																	</a>
																</li>
																<li class="navi-item">
																	<a href="#" class="navi-link">
																		<span class="navi-text">
																			<span class="label label-xl label-inline label-light-warning">Suplier</span>
																		</span>
																	</a>
																</li>
																<li class="navi-item">
																	<a href="#" class="navi-link">
																		<span class="navi-text">
																			<span class="label label-xl label-inline label-light-primary">Member</span>
																		</span>
																	</a>
																</li>
																<li class="navi-item">
																	<a href="#" class="navi-link">
																		<span class="navi-text">
																			<span class="label label-xl label-inline label-light-dark">Staff</span>
																		</span>
																	</a>
																</li>
																<li class="navi-separator mt-3 opacity-70"></li>
																<li class="navi-footer py-4">
																	<a class="btn btn-clean font-weight-bold btn-sm" href="#">
																	<i class="ki ki-plus icon-sm"></i>Add new</a>
																</li>
															</ul>
															<!--end::Navigation-->
														</div>
													</div>
												</div>
												<!--end::Toolbar-->
												<!--begin::User-->
												<div class="d-flex align-items-center mb-7">
													<!--begin::Pic-->
													<div class="flex-shrink-0 mr-4">
														<div class="symbol symbol-circle symbol-lg-75">
															<img src="assets/media/project-logos/1.png" alt="image" />
														</div>
													</div>
													<!--end::Pic-->
													<!--begin::Title-->
													<div class="d-flex flex-column">
														<a href="#" class="text-dark font-weight-bold text-hover-primary font-size-h4 mb-0">Air B</a>
														<span class="text-muted font-weight-bold">Head of Development</span>
													</div>
													<!--end::Title-->
												</div>
												<!--end::User-->
												<!--begin::Desc-->
												<p class="mb-7">I distinguish three main text objectives. First, your objective
												<a href="#" class="text-primary pr-1">#xrs-54pq</a></p>
												<!--end::Desc-->
												<!--begin::Info-->
												<div class="mb-7">
													<div class="d-flex justify-content-between align-items-center">
														<span class="text-dark-75 font-weight-bolder mr-2">Budget:</span>
														<a href="#" class="text-muted text-hover-primary">$249,500</a>
													</div>
													<div class="d-flex justify-content-between align-items-cente my-1">
														<span class="text-dark-75 font-weight-bolder mr-2">Expences:</span>
														<a href="#" class="text-muted text-hover-primary">$76,810</a>
													</div>
													<div class="d-flex justify-content-between align-items-center">
														<span class="text-dark-75 font-weight-bolder mr-2">Due Date:</span>
														<span class="text-muted font-weight-bold">21.05.2016</span>
													</div>
												</div>
												<!--end::Info-->
												<a href="#" class="btn btn-block btn-sm btn-light-success font-weight-bolder text-uppercase py-4">write message</a>
											</div>
											<!--end::Body-->
										</div>
										<!--end:: Card-->
									</div>
									<!--end::Col-->
									<!--begin::Col-->
									<div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
										<!--begin::Card-->
										<div class="card card-custom gutter-b card-stretch">
											<!--begin::Body-->
											<div class="card-body pt-4">
												<!--begin::Toolbar-->
												<div class="d-flex justify-content-end">
													<div class="dropdown dropdown-inline" data-toggle="tooltip" title="Quick actions" data-placement="left">
														<a href="#" class="btn btn-clean btn-hover-light-primary btn-sm btn-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
															<i class="ki ki-bold-more-hor"></i>
														</a>
														<div class="dropdown-menu dropdown-menu-md dropdown-menu-right">
															<!--begin::Navigation-->
															<ul class="navi navi-hover">
																<li class="navi-header pb-1">
																	<span class="text-primary text-uppercase font-weight-bold font-size-sm">Add new:</span>
																</li>
																<li class="navi-item">
																	<a href="#" class="navi-link">
																		<span class="navi-icon">
																			<i class="flaticon2-shopping-cart-1"></i>
																		</span>
																		<span class="navi-text">Order</span>
																	</a>
																</li>
																<li class="navi-item">
																	<a href="#" class="navi-link">
																		<span class="navi-icon">
																			<i class="flaticon2-calendar-8"></i>
																		</span>
																		<span class="navi-text">Event</span>
																	</a>
																</li>
																<li class="navi-item">
																	<a href="#" class="navi-link">
																		<span class="navi-icon">
																			<i class="flaticon2-graph-1"></i>
																		</span>
																		<span class="navi-text">Report</span>
																	</a>
																</li>
																<li class="navi-item">
																	<a href="#" class="navi-link">
																		<span class="navi-icon">
																			<i class="flaticon2-rocket-1"></i>
																		</span>
																		<span class="navi-text">Post</span>
																	</a>
																</li>
																<li class="navi-item">
																	<a href="#" class="navi-link">
																		<span class="navi-icon">
																			<i class="flaticon2-writing"></i>
																		</span>
																		<span class="navi-text">File</span>
																	</a>
																</li>
															</ul>
															<!--end::Navigation-->
														</div>
													</div>
												</div>
												<!--end::Toolbar-->
												<!--begin::User-->
												<div class="d-flex align-items-center mb-7">
													<!--begin::Pic-->
													<div class="flex-shrink-0 mr-4">
														<div class="symbol symbol-circle symbol-lg-75">
															<img src="assets/media/project-logos/2.png" alt="image" />
														</div>
													</div>
													<!--end::Pic-->
													<!--begin::Title-->
													<div class="d-flex flex-column">
														<a href="#" class="text-dark font-weight-bold text-hover-primary font-size-h4 mb-0">Ad Brand</a>
														<span class="text-muted font-weight-bold">PR Manager</span>
													</div>
													<!--end::Title-->
												</div>
												<!--end::User-->
												<!--begin::Desc-->
												<p class="mb-7">I distinguish three main text objectives. First, your objective
												<a href="#" class="text-primary pr-1">#xrs-54pq</a></p>
												<!--end::Desc-->
												<!--begin::Info-->
												<div class="mb-7">
													<div class="d-flex justify-content-between align-items-center">
														<span class="text-dark-75 font-weight-bolder mr-2">Budget:</span>
														<a href="#" class="text-muted text-hover-primary">$249,500</a>
													</div>
													<div class="d-flex justify-content-between align-items-cente my-1">
														<span class="text-dark-75 font-weight-bolder mr-2">Expences:</span>
														<a href="#" class="text-muted text-hover-primary">$76,810</a>
													</div>
													<div class="d-flex justify-content-between align-items-center">
														<span class="text-dark-75 font-weight-bolder mr-2">Due Date:</span>
														<span class="text-muted font-weight-bold">21.05.2016</span>
													</div>
												</div>
												<!--end::Info-->
												<a href="#" class="btn btn-block btn-sm btn-light-danger font-weight-bolder text-uppercase py-4">write message</a>
											</div>
											<!--end::Body-->
										</div>
										<!--end:: Card-->
									</div>
									<!--end::Col-->
									<!--begin::Col-->
									<div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
										<!--begin::Card-->
										<div class="card card-custom gutter-b card-stretch">
											<!--begin::Body-->
											<div class="card-body pt-4">
												<!--begin::Toolbar-->
												<div class="d-flex justify-content-end">
													<div class="dropdown dropdown-inline" data-toggle="tooltip" title="Quick actions" data-placement="left">
														<a href="#" class="btn btn-clean btn-hover-light-primary btn-sm btn-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
															<i class="ki ki-bold-more-hor"></i>
														</a>
														<div class="dropdown-menu dropdown-menu-md dropdown-menu-right">
															<!--begin::Naviigation-->
															<ul class="navi">
																<li class="navi-header font-weight-bold py-5">
																	<span class="font-size-lg">Add New:</span>
																	<i class="flaticon2-information icon-md text-muted" data-toggle="tooltip" data-placement="right" title="Click to learn more..."></i>
																</li>
																<li class="navi-separator mb-3 opacity-70"></li>
																<li class="navi-item">
																	<a href="#" class="navi-link">
																		<span class="navi-icon">
																			<i class="flaticon2-shopping-cart-1"></i>
																		</span>
																		<span class="navi-text">Order</span>
																	</a>
																</li>
																<li class="navi-item">
																	<a href="#" class="navi-link">
																		<span class="navi-icon">
																			<i class="navi-icon flaticon2-calendar-8"></i>
																		</span>
																		<span class="navi-text">Members</span>
																		<span class="navi-label">
																			<span class="label label-light-danger label-rounded font-weight-bold">3</span>
																		</span>
																	</a>
																</li>
																<li class="navi-item">
																	<a href="#" class="navi-link">
																		<span class="navi-icon">
																			<i class="navi-icon flaticon2-telegram-logo"></i>
																		</span>
																		<span class="navi-text">Project</span>
																	</a>
																</li>
																<li class="navi-item">
																	<a href="#" class="navi-link">
																		<span class="navi-icon">
																			<i class="navi-icon flaticon2-new-email"></i>
																		</span>
																		<span class="navi-text">Record</span>
																		<span class="navi-label">
																			<span class="label label-light-success label-rounded font-weight-bold">5</span>
																		</span>
																	</a>
																</li>
																<li class="navi-separator mt-3 opacity-70"></li>
																<li class="navi-footer pt-5 pb-4">
																	<a class="btn btn-light-primary font-weight-bolder btn-sm" href="#">More options</a>
																	<a class="btn btn-clean font-weight-bold btn-sm d-none" href="#" data-toggle="tooltip" data-placement="right" title="Click to learn more...">Learn more</a>
																</li>
															</ul>
															<!--end::Naviigation-->
														</div>
													</div>
												</div>
												<!--end::Toolbar-->
												<!--begin::User-->
												<div class="d-flex align-items-center mb-7">
													<!--begin::Pic-->
													<div class="flex-shrink-0 mr-4">
														<div class="symbol symbol-circle symbol-lg-75">
															<img src="assets/media/project-logos/3.png" alt="image" />
														</div>
													</div>
													<!--end::Pic-->
													<!--begin::Title-->
													<div class="d-flex flex-column">
														<a href="#" class="text-dark font-weight-bold text-hover-primary font-size-h4 mb-0">Nexa</a>
														<span class="text-muted font-weight-bold">Python Developer</span>
													</div>
													<!--end::Title-->
												</div>
												<!--end::User-->
												<!--begin::Desc-->
												<p class="mb-7">I distinguish three main text objectives. First, your objective
												<a href="#" class="text-primary pr-1">#xrs-54pq</a></p>
												<!--end::Desc-->
												<!--begin::Info-->
												<div class="mb-7">
													<div class="d-flex justify-content-between align-items-center">
														<span class="text-dark-75 font-weight-bolder mr-2">Budget:</span>
														<a href="#" class="text-muted text-hover-primary">$249,500</a>
													</div>
													<div class="d-flex justify-content-between align-items-cente my-1">
														<span class="text-dark-75 font-weight-bolder mr-2">Expences:</span>
														<a href="#" class="text-muted text-hover-primary">$76,810</a>
													</div>
													<div class="d-flex justify-content-between align-items-center">
														<span class="text-dark-75 font-weight-bolder mr-2">Due Date:</span>
														<span class="text-muted font-weight-bold">21.05.2016</span>
													</div>
												</div>
												<!--end::Info-->
												<a href="#" class="btn btn-block btn-sm btn-light-info font-weight-bolder text-uppercase py-4">write message</a>
											</div>
											<!--end::Body-->
										</div>
										<!--end:: Card-->
									</div>
									<!--end::Col-->
								</div>
								<!--end::Row-->
								<!--begin::Row-->
								<div class="row">
									<!--begin::Col-->
									<div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
										<!--begin::Card-->
										<div class="card card-custom gutter-b card-stretch">
											<!--begin::Body-->
											<div class="card-body pt-4">
												<!--begin::Toolbar-->
												<div class="d-flex justify-content-end">
													<div class="dropdown dropdown-inline" data-toggle="tooltip" title="Quick actions" data-placement="left">
														<a href="#" class="btn btn-clean btn-hover-light-primary btn-sm btn-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
															<i class="ki ki-bold-more-hor"></i>
														</a>
														<div class="dropdown-menu dropdown-menu-md dropdown-menu-right">
															<!--begin::Navigation-->
															<ul class="navi navi-hover">
																<li class="navi-header font-weight-bold py-4">
																	<span class="font-size-lg">Choose Label:</span>
																	<i class="flaticon2-information icon-md text-muted" data-toggle="tooltip" data-placement="right" title="Click to learn more..."></i>
																</li>
																<li class="navi-separator mb-3 opacity-70"></li>
																<li class="navi-item">
																	<a href="#" class="navi-link">
																		<span class="navi-text">
																			<span class="label label-xl label-inline label-light-success">Customer</span>
																		</span>
																	</a>
																</li>
																<li class="navi-item">
																	<a href="#" class="navi-link">
																		<span class="navi-text">
																			<span class="label label-xl label-inline label-light-danger">Partner</span>
																		</span>
																	</a>
																</li>
																<li class="navi-item">
																	<a href="#" class="navi-link">
																		<span class="navi-text">
																			<span class="label label-xl label-inline label-light-warning">Suplier</span>
																		</span>
																	</a>
																</li>
																<li class="navi-item">
																	<a href="#" class="navi-link">
																		<span class="navi-text">
																			<span class="label label-xl label-inline label-light-primary">Member</span>
																		</span>
																	</a>
																</li>
																<li class="navi-item">
																	<a href="#" class="navi-link">
																		<span class="navi-text">
																			<span class="label label-xl label-inline label-light-dark">Staff</span>
																		</span>
																	</a>
																</li>
																<li class="navi-separator mt-3 opacity-70"></li>
																<li class="navi-footer py-4">
																	<a class="btn btn-clean font-weight-bold btn-sm" href="#">
																	<i class="ki ki-plus icon-sm"></i>Add new</a>
																</li>
															</ul>
															<!--end::Navigation-->
														</div>
													</div>
												</div>
												<!--end::Toolbar-->
												<!--begin::User-->
												<div class="d-flex align-items-center mb-7">
													<!--begin::Pic-->
													<div class="flex-shrink-0 mr-4">
														<div class="symbol symbol-circle symbol-lg-75">
															<img src="assets/media/project-logos/5.png" alt="image" />
														</div>
													</div>
													<!--end::Pic-->
													<!--begin::Title-->
													<div class="d-flex flex-column">
														<a href="#" class="text-dark font-weight-bold text-hover-primary font-size-h4 mb-0">Citrix</a>
														<span class="text-muted font-weight-bold">Project Manager</span>
													</div>
													<!--end::Title-->
												</div>
												<!--end::User-->
												<!--begin::Desc-->
												<p class="mb-7">I distinguish three main text objectives. First, your objective
												<a href="#" class="text-primary pr-1">#xrs-54pq</a></p>
												<!--end::Desc-->
												<!--begin::Info-->
												<div class="mb-7">
													<div class="d-flex justify-content-between align-items-center">
														<span class="text-dark-75 font-weight-bolder mr-2">Budget:</span>
														<a href="#" class="text-muted text-hover-primary">$249,500</a>
													</div>
													<div class="d-flex justify-content-between align-items-cente my-1">
														<span class="text-dark-75 font-weight-bolder mr-2">Expences:</span>
														<a href="#" class="text-muted text-hover-primary">$76,810</a>
													</div>
													<div class="d-flex justify-content-between align-items-center">
														<span class="text-dark-75 font-weight-bolder mr-2">Due Date:</span>
														<span class="text-muted font-weight-bold">21.05.2016</span>
													</div>
												</div>
												<!--end::Info-->
												<a href="#" class="btn btn-block btn-sm btn-light-success font-weight-bolder text-uppercase py-4">write message</a>
											</div>
											<!--end::Body-->
										</div>
										<!--end:: Card-->
									</div>
									<!--end::Col-->
									<!--begin::Col-->
									<div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
										<!--begin::Card-->
										<div class="card card-custom gutter-b card-stretch">
											<!--begin::Body-->
											<div class="card-body pt-4">
												<!--begin::Toolbar-->
												<div class="d-flex justify-content-end">
													<div class="dropdown dropdown-inline" data-toggle="tooltip" title="Quick actions" data-placement="left">
														<a href="#" class="btn btn-clean btn-hover-light-primary btn-sm btn-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
															<i class="ki ki-bold-more-hor"></i>
														</a>
														<div class="dropdown-menu dropdown-menu-md dropdown-menu-right">
															<!--begin::Navigation-->
															<ul class="navi navi-hover">
																<li class="navi-header pb-1">
																	<span class="text-primary text-uppercase font-weight-bold font-size-sm">Add new:</span>
																</li>
																<li class="navi-item">
																	<a href="#" class="navi-link">
																		<span class="navi-icon">
																			<i class="flaticon2-shopping-cart-1"></i>
																		</span>
																		<span class="navi-text">Order</span>
																	</a>
																</li>
																<li class="navi-item">
																	<a href="#" class="navi-link">
																		<span class="navi-icon">
																			<i class="flaticon2-calendar-8"></i>
																		</span>
																		<span class="navi-text">Event</span>
																	</a>
																</li>
																<li class="navi-item">
																	<a href="#" class="navi-link">
																		<span class="navi-icon">
																			<i class="flaticon2-graph-1"></i>
																		</span>
																		<span class="navi-text">Report</span>
																	</a>
																</li>
																<li class="navi-item">
																	<a href="#" class="navi-link">
																		<span class="navi-icon">
																			<i class="flaticon2-rocket-1"></i>
																		</span>
																		<span class="navi-text">Post</span>
																	</a>
																</li>
																<li class="navi-item">
																	<a href="#" class="navi-link">
																		<span class="navi-icon">
																			<i class="flaticon2-writing"></i>
																		</span>
																		<span class="navi-text">File</span>
																	</a>
																</li>
															</ul>
															<!--end::Navigation-->
														</div>
													</div>
												</div>
												<!--end::Toolbar-->
												<!--begin::User-->
												<div class="d-flex align-items-center mb-7">
													<!--begin::Pic-->
													<div class="flex-shrink-0 mr-4">
														<div class="symbol symbol-circle symbol-lg-75">
															<img src="assets/media/project-logos/6.png" alt="image" />
														</div>
													</div>
													<!--end::Pic-->
													<!--begin::Title-->
													<div class="d-flex flex-column">
														<a href="#" class="text-dark font-weight-bold text-hover-primary font-size-h4 mb-0">Gap</a>
														<span class="text-muted font-weight-bold">Frontend Developer</span>
													</div>
													<!--end::Title-->
												</div>
												<!--end::User-->
												<!--begin::Desc-->
												<p class="mb-7">I distinguish three main text objectives. First, your objective
												<a href="#" class="text-primary pr-1">#xrs-54pq</a></p>
												<!--end::Desc-->
												<!--begin::Info-->
												<div class="mb-7">
													<div class="d-flex justify-content-between align-items-center">
														<span class="text-dark-75 font-weight-bolder mr-2">Budget:</span>
														<a href="#" class="text-muted text-hover-primary">$249,500</a>
													</div>
													<div class="d-flex justify-content-between align-items-cente my-1">
														<span class="text-dark-75 font-weight-bolder mr-2">Expences:</span>
														<a href="#" class="text-muted text-hover-primary">$76,810</a>
													</div>
													<div class="d-flex justify-content-between align-items-center">
														<span class="text-dark-75 font-weight-bolder mr-2">Due Date:</span>
														<span class="text-muted font-weight-bold">21.05.2016</span>
													</div>
												</div>
												<!--end::Info-->
												<a href="#" class="btn btn-block btn-sm btn-light-info font-weight-bolder text-uppercase py-4">write message</a>
											</div>
											<!--end::Body-->
										</div>
										<!--end:: Card-->
									</div>
									<!--end::Col-->
									<!--begin::Col-->
									<div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
										<!--begin::Card-->
										<div class="card card-custom gutter-b card-stretch">
											<!--begin::Body-->
											<div class="card-body pt-4">
												<!--begin::Toolbar-->
												<div class="d-flex justify-content-end">
													<div class="dropdown dropdown-inline" data-toggle="tooltip" title="Quick actions" data-placement="left">
														<a href="#" class="btn btn-clean btn-hover-light-primary btn-sm btn-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
															<i class="ki ki-bold-more-hor"></i>
														</a>
														<div class="dropdown-menu dropdown-menu-md dropdown-menu-right">
															<!--begin::Naviigation-->
															<ul class="navi">
																<li class="navi-header font-weight-bold py-5">
																	<span class="font-size-lg">Add New:</span>
																	<i class="flaticon2-information icon-md text-muted" data-toggle="tooltip" data-placement="right" title="Click to learn more..."></i>
																</li>
																<li class="navi-separator mb-3 opacity-70"></li>
																<li class="navi-item">
																	<a href="#" class="navi-link">
																		<span class="navi-icon">
																			<i class="flaticon2-shopping-cart-1"></i>
																		</span>
																		<span class="navi-text">Order</span>
																	</a>
																</li>
																<li class="navi-item">
																	<a href="#" class="navi-link">
																		<span class="navi-icon">
																			<i class="navi-icon flaticon2-calendar-8"></i>
																		</span>
																		<span class="navi-text">Members</span>
																		<span class="navi-label">
																			<span class="label label-light-danger label-rounded font-weight-bold">3</span>
																		</span>
																	</a>
																</li>
																<li class="navi-item">
																	<a href="#" class="navi-link">
																		<span class="navi-icon">
																			<i class="navi-icon flaticon2-telegram-logo"></i>
																		</span>
																		<span class="navi-text">Project</span>
																	</a>
																</li>
																<li class="navi-item">
																	<a href="#" class="navi-link">
																		<span class="navi-icon">
																			<i class="navi-icon flaticon2-new-email"></i>
																		</span>
																		<span class="navi-text">Record</span>
																		<span class="navi-label">
																			<span class="label label-light-success label-rounded font-weight-bold">5</span>
																		</span>
																	</a>
																</li>
																<li class="navi-separator mt-3 opacity-70"></li>
																<li class="navi-footer pt-5 pb-4">
																	<a class="btn btn-light-primary font-weight-bolder btn-sm" href="#">More options</a>
																	<a class="btn btn-clean font-weight-bold btn-sm d-none" href="#" data-toggle="tooltip" data-placement="right" title="Click to learn more...">Learn more</a>
																</li>
															</ul>
															<!--end::Naviigation-->
														</div>
													</div>
												</div>
												<!--end::Toolbar-->
												<!--begin::User-->
												<div class="d-flex align-items-center mb-7">
													<!--begin::Pic-->
													<div class="flex-shrink-0 mr-4">
														<div class="symbol symbol-circle symbol-lg-75">
															<img src="assets/media/project-logos/7.png" alt="image" />
														</div>
													</div>
													<!--end::Pic-->
													<!--begin::Title-->
													<div class="d-flex flex-column">
														<a href="#" class="text-dark font-weight-bold text-hover-primary font-size-h4 mb-0">Nokia</a>
														<span class="text-muted font-weight-bold">App Developer</span>
													</div>
													<!--end::Title-->
												</div>
												<!--end::User-->
												<!--begin::Desc-->
												<p class="mb-7">I distinguish three main text objectives. First, your objective
												<a href="#" class="text-primary pr-1">#xrs-54pq</a></p>
												<!--end::Desc-->
												<!--begin::Info-->
												<div class="mb-7">
													<div class="d-flex justify-content-between align-items-center">
														<span class="text-dark-75 font-weight-bolder mr-2">Budget:</span>
														<a href="#" class="text-muted text-hover-primary">$249,500</a>
													</div>
													<div class="d-flex justify-content-between align-items-cente my-1">
														<span class="text-dark-75 font-weight-bolder mr-2">Expences:</span>
														<a href="#" class="text-muted text-hover-primary">$76,810</a>
													</div>
													<div class="d-flex justify-content-between align-items-center">
														<span class="text-dark-75 font-weight-bolder mr-2">Due Date:</span>
														<span class="text-muted font-weight-bold">21.05.2016</span>
													</div>
												</div>
												<!--end::Info-->
												<a href="#" class="btn btn-block btn-sm btn-light-warning font-weight-bolder text-uppercase py-4">write message</a>
											</div>
											<!--end::Body-->
										</div>
										<!--end:: Card-->
									</div>
									<!--end::Col-->
								</div>
								<!--end::Row-->
								<!--begin::Pagination-->
								<div class="card card-custom">
									<div class="card-body py-7">
										<!--begin::Pagination-->
										<div class="d-flex justify-content-between align-items-center flex-wrap">
											<div class="d-flex flex-wrap mr-3">
												<a href="#" class="btn btn-icon btn-sm btn-light-primary mr-2 my-1">
													<i class="ki ki-bold-double-arrow-back icon-xs"></i>
												</a>
												<a href="#" class="btn btn-icon btn-sm btn-light-primary mr-2 my-1">
													<i class="ki ki-bold-arrow-back icon-xs"></i>
												</a>
												<a href="#" class="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1">...</a>
												<a href="#" class="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1">23</a>
												<a href="#" class="btn btn-icon btn-sm border-0 btn-hover-primary active mr-2 my-1">24</a>
												<a href="#" class="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1">25</a>
												<a href="#" class="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1">26</a>
												<a href="#" class="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1">27</a>
												<a href="#" class="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1">28</a>
												<a href="#" class="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1">...</a>
												<a href="#" class="btn btn-icon btn-sm btn-light-primary mr-2 my-1">
													<i class="ki ki-bold-arrow-next icon-xs"></i>
												</a>
												<a href="#" class="btn btn-icon btn-sm btn-light-primary mr-2 my-1">
													<i class="ki ki-bold-double-arrow-next icon-xs"></i>
												</a>
											</div>
											<div class="d-flex align-items-center">
												<select class="form-control form-control-sm text-primary font-weight-bold mr-4 border-0 bg-light-primary" style="width: 75px;">
													<option value="10">10</option>
													<option value="20">20</option>
													<option value="30">30</option>
													<option value="50">50</option>
													<option value="100">100</option>
												</select>
												<span class="text-muted">Displaying 10 of 230 records</span>
											</div>
										</div>
										<!--end:: Pagination-->
									</div>
								</div>
								<!--end::Pagination-->
							</div>
							<!--end::Container-->
						</div>
						<!--end::Entry-->
					</div>
					<!--end::Content-->
					begin::Footer
					<div class="footer bg-white py-4 d-flex flex-lg-column" id="kt_footer">
						<!--begin::Container-->
						<div class="container d-flex flex-column flex-md-row align-items-center justify-content-between">
							<!--begin::Copyright-->
							<div class="text-dark order-2 order-md-1">
								<span class="text-muted font-weight-bold mr-2">2021©</span>
								<a href="http://keenthemes.com/metronic" target="_blank" class="text-dark-75 text-hover-primary">Keenthemes</a>
							</div>
							<!--end::Copyright-->
							<!--begin::Nav-->
							<div class="nav nav-dark order-1 order-md-2">
								<a href="http://keenthemes.com/metronic" target="_blank" class="nav-link pr-3 pl-0">About</a>
								<a href="http://keenthemes.com/metronic" target="_blank" class="nav-link px-3">Team</a>
								<a href="http://keenthemes.com/metronic" target="_blank" class="nav-link pl-3 pr-0">Contact</a>
							</div>
							<!--end::Nav-->
						</div>
						<!--end::Container-->
					</div>
					<!--end::Footer-->
				</div>
				<!--end::Wrapper-->
			</div>
			<!--end::Page-->
</div>
<!--end::Main-->
</template>
<script>

import shapeFormat from '@/mixins/shapeFormat.js'

export default {
   name: "ListApp",
   props: ["msg"],
   mixins: [shapeFormat],
   data() {
       return {
           moduleList : ["user","order", "shop", "config", "checkqueue", "product"],
           iconList : ["fa-user-plus","fa-shopping-cart", "fa-store", "fa-tools", "fa-calendar-check" , "fa-tshirt"],
           actionList: ["add","update","delete","info","other"],
           bgColorList: ["bg-light-success", "bg-light-warning" , "bg-light-primary", "bg-light-info", "bg-light-dark"],
           textColorList: ["text-success", "text-warning" , "text-primary", "text-info", "text-dark"],



           apiMockData: [{
                createDateTime: "2021-08-16",
                crateBy: "support@alexrental.com",
                shopName: "Alex2",
                shopLogo: "https://demo002.alexrental.app/images/162c8139-fb70-4ede-86f3-61b5e056f772.png",
                code: "ADD_ORDER_HEADER",
                action: "add",
                module: "order",
                description: "staff1@gmail.com เพิ่ม order หมายเลข OR121091300001"
            },
            {
                createDateTime: "2021-07-14 15:25:32.278853",
                crateBy: "support@alexrental.com",
                shopName: "Alex2",
                shopLogo: "https://demo002.alexrental.app/images/162c8139-fb70-4ede-86f3-61b5e056f772.png",
                code: "ADD_USER",
                action: "add",
                module: "user",
                description: "support@gmail.com เพิ่มผู้ใช้งาน chris@gmail.com"
            },
            {
                createDateTime: "2021-03-01 15:25:32.278853",
                crateBy: "support@alexrental.com",
                shopName: "Alex2",
                shopLogo: "https://demo002.alexrental.app/images/162c8139-fb70-4ede-86f3-61b5e056f772.png",
                code: "CHECKQUEUE",
                action: "info",
                module: "checkqueue",
                description: "pha@gmail.com เช็คคิวชุด"
            },
            {
                createDateTime: "2021-03-01 15:25:32.278853",
                crateBy: "support@alexrental.com",
                shopName: "Alex2",
                shopLogo: "https://demo002.alexrental.app/images/162c8139-fb70-4ede-86f3-61b5e056f772.png",
                code: "UPDATE_SHOP",
                action: "update",
                module: "shop",
                description: "pha@gmail.com เช็คคิวชุด"
            },
            {
                createDateTime: "2021-03-01 15:25:32.278853",
                crateBy: "support@alexrental.com",
                shopName: "Alex2",
                shopLogo: "https://demo002.alexrental.app/images/162c8139-fb70-4ede-86f3-61b5e056f772.png",
                code: "UPDATE_PRODUCT",
                action: "delete",
                module: "product",
                description: "pha@gmail.com ลบสินค้า 0001fafam"
            },
           
           ]
           
   };
},
// methods: {
//     checkModule(input){
//         const res = this.moduleList.indexOf(input);
//         if(res > -1){
//             return this.iconList[res]
//         }else{
//             return "";
//         }

//     },
//     checkActionText(input){
//         const res = this.actionList.indexOf(input);
//         if(res > -1){
//             return this.textColorList[res]
//         }else{
//             return "text-dark";
//         }
//     },
//     checkActionBg(input){
//         const res = this.actionList.indexOf(input);
//         if(res > -1){
//             return this.bgColorList[res]
//         }else{
//             return "bg-light-dark";
//         }
//     },
  
// },
// components: {
   
// }
};
</script>
 
<style >
 
</style>