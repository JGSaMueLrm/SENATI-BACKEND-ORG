router.get("/", controller.listPersonas);
router.post("/new/", controller.createPersona);
router.put("/:id", controller.updatePersona);
router.delete("/:id", controller.destroyPersona);

router.get("/personas/", controller.listPersonas);
router.post("/personas/new/", controller.createPersona);
router.put("/personas/:id", controller.updatePersona);
router.delete("/personas/:id", controller.destroyPersona);

module.exports = router;