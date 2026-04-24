import hashlib

def get_wiki_url(filename):
    m = hashlib.md5()
    m.update(filename.encode('utf-8'))
    h = m.hexdigest()
    return f"https://ck3.paradoxwikis.com/images/{h[0]}/{h[0:2]}/{filename}"

traits = [
    ("Albino", "Trait_albino.png"),
    ("Bleeder", "Trait_bleeder.png"),
    ("Club-footed", "Trait_clubfooted.png"),
    ("Dwarf", "Trait_dwarf.png"),
    ("Fecund", "Trait_fecund.png"),
    ("Giant", "Trait_giant.png"),
    ("Hunchbacked", "Trait_hunchbacked.png"),
    ("Lisping", "Trait_lisping.png"),
    ("Lunatic", "Trait_lunatic.png"),
    ("Melancholic", "Trait_depressed.png"),
    ("Possessed", "Trait_possessed.png"),
    ("Pure-blooded", "Trait_pure_blooded.png"),
    ("Scaly", "Trait_scaly.png"),
    ("Spindly", "Trait_spindly.png"),
    ("Sterile", "Trait_infertile.png"),
    ("Stuttering", "Trait_stuttering.png"),
    ("Wheezing", "Trait_wheezing.png"),
    ("Imbecile", "Trait_intellect_bad_3.png"),
    ("Stupid", "Trait_intellect_bad_2.png"),
    ("Slow", "Trait_intellect_bad_1.png"),
    ("Quick", "Trait_intellect_good_1.png"),
    ("Intelligent", "Trait_intellect_good_2.png"),
    ("Genius", "Trait_intellect_good_3.png"),
    ("Feeble", "Trait_physique_bad_3.png"),
    ("Frail", "Trait_physique_bad_2.png"),
    ("Delicate", "Trait_physique_bad_1.png"),
    ("Hale", "Trait_physique_good_1.png"),
    ("Robust", "Trait_physique_good_2.png"),
    ("Herculean", "Trait_physique_good_3.png"),
    ("Hideous", "Trait_beauty_bad_3.png"),
    ("Ugly", "Trait_beauty_bad_2.png"),
    ("Homely", "Trait_beauty_bad_1.png"),
    ("Comely", "Trait_beauty_good_1.png"),
    ("Pretty", "Trait_beauty_good_2.png"),
    ("Beautiful", "Trait_beauty_good_3.png")
]

print("CONGENITAL:")
for name, file in traits:
    print(f"{name} | {get_wiki_url(file)}")

edu_types = ["diplomacy", "martial", "stewardship", "intrigue", "learning"]
print("\nEDUCATION:")
for et in edu_types:
    for level in range(1, 5):
        filename = f"Trait_education_{et}_{level}.png"
        print(f"{et.capitalize()} {level} | {get_wiki_url(filename)}")

personalities = [
    "Ambitious", "Arbitrary", "Arrogant", "Brave", "Callous", "Calm", "Chaste",
    "Compassionate", "Content", "Craven", "Cynical", "Deceitful", "Diligent",
    "Fickle", "Forgiving", "Generous", "Gluttonous", "Greedy", "Gregarious",
    "Honest", "Humble", "Impatient", "Just", "Lazy", "Lustful", "Paranoid",
    "Patient", "Sadistic", "Shy", "Stubborn", "Temperate", "Trusting",
    "Vengeful", "Wrathful", "Zealous", "Eccentric"
]

print("\nPERSONALITY:")
for p in personalities:
    filename = f"Trait_{p.lower()}.png"
    print(f"{p} | {get_wiki_url(filename)}")
