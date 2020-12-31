function Particle(x, y, hu1, hu2, hu3, isFirework) {
    this.pos = createVector(x, y);
    this.isFirework = isFirework
    this.lifespan = 255;
    this.hu1 = hu1;
    this.hu2 = hu2;
    this.hu3 = hu3;

    if (this.isFirework) {
            this.vel = createVector(0, random(-19, -13));
    }
    else {
            this.vel = p5.Vector.random2D();
            this.vel.mult(random(2, 12));

    }
    this.acc = createVector(0, 0);

    this.applyForce = function (force) {
            this.acc.add(force);
    }

    this.update = function () {
            if (!this.isFirework) {
                    this.vel.mult(0.96);
                    this.lifespan -= 4

            }
            this.vel.add(this.acc);
            this.pos.add(this.vel);
            this.acc.mult(0);
    }

    this.show = function () {
            stroke(hu1, hu2, hu3, this.lifespan)
            // stroke(hu1, this.lifespan)
            strokeWeight(8)
            point(this.pos.x, this.pos.y);
    }
}