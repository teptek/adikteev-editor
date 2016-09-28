<nav class="nav-left-options">
    <div class="nav-items-content">
        <ul>
            <li class="active content-bg">
                <div class="custom-background-container">
                    <div class="fieldset">
                        <h5>Choisissez une couleur de fond</h5>
                        <input id="bg-colorpicker" type="text" class="form-control" value="pink" />
                    </div>
                    <h4>OU</h4>
                    <div class="fieldset">
                        <h5>Choisissez une image de fond</h5>
                        <div class="bg-image">
                            <form action="/upload" class="dropzone needsclick dz-clickable" id="demo-upload">
                                <div class="dz-default dz-message"><span>Glissez un fichier ici</span></div>
                                <div class="fallback">
                                    <input name="file" type="file"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </li>
            <li class="content-title">
                <div class="custom-title-container">
                    <div id="title-form">
                        <div class="fieldset">
                            <h5>Ajoutez un titre</h5>
                            <input id="custom-title" class="custom-input" type="text" placeholder="Votre titre">
                            <button id="title-remove">Effacer</button>
                        </div>
                        <div class="fieldset">
                            <h5>Choisissez une couleur de titre</h5>
                            <input id="title-colorpicker" type="text" class="form-control" value="pink" />
                        </div>
                        <div class="fieldset">
                            <h5>Ajustez la taille de la police (px)</h5>
                            <input id="custom-title-size" type="range" min="5" max="150" value="12">
                        </div>
                        <div class="fieldset">
                            <h5>Déplacez votre titre directement sur l'aperçu >></h5>
                        </div>
                    </div>
                </div>
            </li>
            <li class="content-text">
                <div id="txt-form">
                    <div class="fieldset">
                        <h5>Ajoutez un texte</h5>
                        <input id="custom-txt" class="custom-input" type="text" placeholder="Votre texte">
                        <button id="txt-remove">Effacer</button>
                    </div>
                    <div class="fieldset">
                        <h5>Choisissez une couleur de texte</h5>
                        <input id="text-colorpicker" type="text" class="form-control" value="pink" />
                    </div>
                    <div class="fieldset">
                        <h5>Ajustez la taille de la police (px)</h5>
                        <input id="custom-text-size" type="range" min="5" max="50" value="12">
                    </div>
                    <div class="fieldset">
                        <h5>Déplacez votre texte directement sur l'aperçu >></h5>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</nav>