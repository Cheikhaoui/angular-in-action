import { Component, OnDestroy, OnInit } from '@angular/core';


interface Metric {
  used: number,
  available: number
}

interface Node {
  name: string,
  cpu: Metric,
  mem: Metric
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  cpu: Metric;
  mem: Metric;
  cluster1: Node[];
  cluster2: Node[];
  intervale: any;

  generateData(): void {
    this.cluster1 = [];
    this.cluster2 = [];
    this.cpu = { used: 0, available: 0 };
    this.mem = { used: 0, available: 0 };
    for (let i = 1; i < 4; i++) this.cluster1.push(this.randomNode(i));
    for (let i = 4; i < 7; i++) this.cluster2.push(this.randomNode(i));
  }

  private randomNode(i: number): Node {
    let node: Node = {
      name: 'node' + i,
      cpu: { available: 8, used: this.randomInteger(0, 8) },
      mem: { available: 16, used: this.randomInteger(0, 16) }
    }
    this.cpu.used += node.cpu.used;
    this.cpu.available += node.cpu.available;
    this.mem.used += node.mem.used;
    this.mem.available += node.mem.available;
    return node;
  }

  private randomInteger(min: number = 0, max: number = 100): number {
    return Math.floor(Math.random() * max) + 1;
  }

  constructor() { }

  ngOnInit() {
    this.generateData();
  //  this.intervale = setInterval(()=> {this.generateData()},1500)
  }

  ngOnDestroy(): void {
  clearInterval(this.intervale)
  }

}
