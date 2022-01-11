import { RepoService } from './../repo.service';
import { filter, distinctUntilChanged } from 'rxjs/operators';
import { IBreadCrumb } from './breadcrumb.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  public breadcrumbs!: IBreadCrumb[];
  hidePriceListDetailsContent = false;

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly repo: RepoService
  ) {
    this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root, '', []);
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      distinctUntilChanged(),
    ).subscribe(() => {
      this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root, '', []);
    })
    this.repo.isChargeOpen.subscribe((isChargeOpened: boolean) => {
      this.hidePriceListDetailsContent = isChargeOpened;
    })
  }

  buildBreadCrumb(route: ActivatedRoute, url: string, breadcrumbs: IBreadCrumb[]): IBreadCrumb[] {
    const label = route.routeConfig && route.routeConfig.data ? route.routeConfig.data.breadcrumb : '';
    let path = route.routeConfig && route.routeConfig.data ? route.routeConfig.path : '';
    if (path?.includes(':id')) {
      route?.params.subscribe(routeParam => {
        if (routeParam && routeParam.id) {
          path = path?.replace(':id', routeParam.id.toString());
        }
      })
    }
    const nextUrl = path ? `${url}/${path}` : url;
    const  breadcrumb: IBreadCrumb = {
      label, routerLink: nextUrl
    };
    const newBreadCrumbs = breadcrumb.label ? [...breadcrumbs, breadcrumb] : [...breadcrumbs];
    if (route.firstChild) {
      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadCrumbs);
    }
    return newBreadCrumbs;
  }

}
