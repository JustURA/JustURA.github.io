function Firework() {
    this.hu1 = random(255);
    this.hu2 = random(255);
    this.hu3 = random(255)
    this.firework = new Particle(random(width), height, this.hu1, this.hu2, this.hu3, true);
    this.exploded = false;
    this.particles = [];


    this.update = function () {
            if (!this.exploded) {
                    this.firework.applyForce(gravity);
                    this.firework.update();
                    this.firework.show();
                    if (this.firework.vel.y >= 2) {
                            if (random(1) <= 0.5) {
                                    this.exploded = true;
                                    this.explode();
                            }
                    }
            }


            for (var i = this.particles.length - 1; i >= 0; i--) {
                    this.particles[i].applyForce(gravity);
                    this.particles[i].update();
                    if (this.particles[i].lifespan <= 0) {
                            this.particles.splice(i, 1);
                    }
            }

    }

    this.done = function () {
            if (this.exploded && this.particles.length === 0) {
                    return true;
            }
            else {
                    return false;
            }
    }

    this.explode = function () {
            playExplosion();
            for (var i = 0; i < 100; i++) {
                    var p = new Particle(this.firework.pos.x, this.firework.pos.y, this.hu1, this.hu2, this.hu3, false);
                    this.particles.push(p);
            }
    }

    this.show = function () {
            if (!this.exploded) {
                    this.firework.show();
            }

            for (var i = 0; i < this.particles.length; i++) {
                    this.particles[i].show();
            }

    }

}